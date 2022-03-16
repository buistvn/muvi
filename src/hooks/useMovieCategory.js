import { useEffect, useState } from 'react';

const useMovieCategory = (category, page) => {
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
                    `https://api.themoviedb.org/3/movie/${category}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=${page}`,
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

        if (category && page) {
            fetchMovies();
        }

        return () => {
            controller.abort();
            ignore = true;
        };
    }, [category, page]);

    return [movies, totalPages, loading];
};

export default useMovieCategory;
