"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react"

const Search = () => {
    const [query, setQuery] = useState("");
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSearchSubmit = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        const baseParams = searchParams ?? new URLSearchParams();
        const updatedParams = new URLSearchParams(Array.from(baseParams.entries()));

        const trimmed = query.trim();
        if (trimmed === "") {
            updatedParams.delete("search");
        } else {
            updatedParams.set("search", trimmed);
        }

        const queryString = updatedParams.toString();
        router.push(queryString ? `/?${queryString}` : "/");
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }
    const handleClearAll = () => {
        setQuery("");
        router.push("/");
    }

    return (
        <form onSubmit={handleSearchSubmit} className='hidden md:flex flex-1 '>
            <input value={query} onChange={handleInputChange} className="py-2 px-3 rounded-s-lg border-none outline-none flex flex-1 text-gray-700" type="text" placeholder="Arama Yap..." />
            {(query.trim() !== "") && (
                <button type="button" onClick={handleClearAll} className="px-4 text-gray-800 bg-white">
                    x
                </button>
            )}
            <button type="submit" className="p-2 bg-orange-800 text-sm rounded-e-lg border border-transparent">Ara</button>
        </form>
    )
}

export default Search