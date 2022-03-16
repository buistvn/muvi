import { useEffect, useState } from 'react';

const useMovieDetails = (movieId) => {
    const [details, setDetails] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let ignore = false;
        const controller = new AbortController();

        const fetchDetails = async () => {
            let body = {};
            setLoading(true);

            try {
                const res = await fetch(
                    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`,
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
                setDetails(body);
                setLoading(false);
            }
        };

        if (movieId) {
            fetchDetails();
        }

        return () => {
            controller.abort();
            ignore = true;
        };
    }, [movieId]);

    return [details, loading];
};

export default useMovieDetails;
