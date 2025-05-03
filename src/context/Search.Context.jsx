import { useState } from "react";
import { createContext } from "react"
export const SearchContext = createContext();
const baseUrl = "https://google-search-master.p.rapidapi.com/search";

// eslint-disable-next-line react/prop-types
export default function SearchProvider({ children }) {

    const [loading, setLoading] = useState(false)
    const [results, setResults] = useState([])
    const [searchTerm, setSearchTerm] = useState(null)

    async function getResults(type) {
        setLoading(true);


        const res = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'process.env.REACT_APP_API_KEY',
                'x-rapidapi-host': 'google-search-master.p.rapidapi.com'
            }
        });
        const data = await res.json()
        setResults(data)
        setLoading(false)
    }

    return <SearchContext.Provider value={{ loading, results, getResults, searchTerm, setSearchTerm }}>
        {children}
    </SearchContext.Provider>
}