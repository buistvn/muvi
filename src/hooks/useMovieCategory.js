import { useEffect, useState } from 'react';

const useMovieCategory = (category, page) => {
    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let ignore = false;
        const controller = new AbortController();

        const fetchMovies = async () => {
            let responseData = {};
            setLoading(true);

            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/${category}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=${page}`,
                    { signal: controller.signal }
                );
                responseData = await response.json();
            } catch (e) {
                if (e instanceof DOMException) {
                    console.log('HTTP request aborted');
                } else {
                    throw e;
                }
            }

            if (!ignore) {
                setMovies(responseData.results || []);
                setTotalPages(responseData.total_pages);
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
