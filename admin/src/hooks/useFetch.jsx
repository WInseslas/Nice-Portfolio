import { useState, useEffect } from 'react';

export default function useFetch({ url, options }) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        setTimeout(() => { 
            const fetchData = async () => {
                try {
                    const response = await fetch(url, options);
                    const json = await response.json();
                    setData(json);
                } catch (error) {
                    setError(error);
                } finally {
                    setIsLoading(false);
                }
            };
            fetchData();
        }, 2000000)
        
    }, [url, options]);

    return [data, isLoading, error];
}
