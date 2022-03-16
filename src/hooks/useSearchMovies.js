import { useEffect, useState } from 'react';

const useSearchMovies = (query, page) => {
    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let ignore = false;
        const controller = new AbortController();

        const fetchMovies = async () => {
            let body = {};
            setLoading(true);

            try {
                const res = await fetch(
                    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`,
                    { signal: controller.signal }
                );
                body = await res.json();
            } catch (e) {
                if (e instanceof DOMException) {
                    console.log('HTTP request aborted');
                } else {
                    throw e;
                }
            }

            if (!ignore) {
                setMovies(body.results || []);
                setTotalPages(body.total_pages);
                setLoading(false);
            }
        };

        if (query && page) {
            fetchMovies();
        }

        return () => {
            controller.abort();
            ignore = true;
        };
    }, [query, page]);

    return [movies, totalPages, loading];
};

export default useSearchMovies;
