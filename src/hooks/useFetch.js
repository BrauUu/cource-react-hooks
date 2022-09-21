import { useEffect, useState } from "react";

export default function useFetch(url, method = 'GET') {
    const [res, setRes] = useState({
        data: null,
        loading: false
    })

    useEffect(() => {
        fetch(url, { method })
            .then(res => res.json())
            .then(res => setRes({
                data: res, 
                loading: false
            }))
    },[url, method])

    return res;
}