import { useEffect, useState } from 'react';

const useTrendingMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let ignore = false;
        const controller = new AbortController();

        const fetchMovies = async () => {
            let body = {};
            setLoading(true);

            try {
                const res = await fetch(
                    `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
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
                setLoading(false);
            }
        };

        fetchMovies();

        return () => {
            controller.abort();
            ignore = true;
        };
    }, []);

    return [movies, loading];
};

export default useTrendingMovies;
