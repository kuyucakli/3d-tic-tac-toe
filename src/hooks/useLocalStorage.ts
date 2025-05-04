import { useState } from "react";

const useLocalStorage = <T>(key: string, val: T) => {

    const get = () => {
        const l = localStorage.getItem(key);
        if (l) return JSON.parse(l) as T;
        return null;

    }

    const set = (val: T) => {
        localStorage.setItem(key, JSON.stringify(val));
        setData(val);
    }

    const [data, setData] = useState<T>(get() || val);




    return { get, set, data };
}


export default useLocalStorage;