import { useEffect, useState } from 'react';

const useMovieCategory = (page, filter) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let ignore = false;
        const controller = new AbortController();

        const fetchMovies = async () => {
            let responseData = {};
            setLoading(true);

            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/${filter}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=${page}`,
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
                setLoading(false);
            }
        };

        if (page && filter) {
            fetchMovies();
        }

        return () => {
            controller.abort();
            ignore = true;
        };
    }, [page, filter]);

    return [movies, loading];
};

export default useMovieCategory;
