import { useEffect, useState } from 'react';

const useAccountList = (list, accountID, sessionID, page) => {
    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let ignore = false;
        const controller = new AbortController();

        const fetchMovies = async () => {
            let resBody = {};
            setLoading(true);

            try {
                const res = await fetch(
                    `https://api.themoviedb.org/3/account/${accountID}/${list}/movies?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&session_id=${sessionID}&page=${page}`,
                    { signal: controller.signal }
                );
                resBody = await res.json();
            } catch (e) {
                if (e instanceof DOMException) {
                    console.log('HTTP request aborted');
                } else {
                    throw e;
                }
            }

            if (!ignore) {
                setMovies(resBody.results || []);
                setTotalPages(resBody.total_pages);
                setLoading(false);
            }
        };

        if (page) {
            fetchMovies();
        }

        return () => {
            controller.abort();
            ignore = true;
        };
    }, [page]);

    return [movies, totalPages, loading];
};

export default useAccountList;
