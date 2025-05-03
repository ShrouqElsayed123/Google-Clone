import { useState } from "react";
import { createContext } from "react"
export const SearchContext = createContext();
const baseUrl = "https://google-search-master.p.rapidapi.com";

// eslint-disable-next-line react/prop-types
export default function SearchProvider({ children }) {

    const [loading, setLoading] = useState(false)
    const [results, setResults] = useState([])
    const [searchTerm, setSearchTerm] = useState('apple')

    async function getResults(type) {
        setLoading(true);


        const res = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'x-rapidapi-key': import.meta.env.VITE_API_URL
                ,
                'x-rapidapi-host': 'google-search-master.p.rapidapi.com'
            }
        });
        const data = await res.json()
        console.log(data);

        setResults(data)
        setLoading(false)
    }

    return <SearchContext.Provider value={{ loading, results, getResults, searchTerm, setSearchTerm }}>
        {children}
    </SearchContext.Provider>
}