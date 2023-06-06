import { createContext, useState } from "react";

export const isLoading = createContext({})

export const Loading = ({ children }) => {
    const [loading1, setLoading1] = useState(true)
    const [loading2, setLoading2] = useState(true)
    const [loading3, setLoading3] = useState(true)
    const [loading4, setLoading4] = useState(true)

    return(
        <isLoading.Provider value={{loading1, setLoading1, loading2, setLoading2, loading3, setLoading3, loading4, setLoading4}} >
            { children }
        </isLoading.Provider>
    )
}

