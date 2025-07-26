import { useQuery } from "@tanstack/react-query";

const fetchHotDrinks = async () => {
    const res = await fetch('http://localhost:3000/api/get-all-hot-drink');
    if (!res.ok) {
        throw new Error("Failed to fetch drinks")
    }
    const data = await res.json()
    return data.data
}

const HOT_DRINKS = 'hotDrinks'

export function useHotDrinkList() {
    return useQuery({
        queryKey: [HOT_DRINKS],
        queryFn: fetchHotDrinks
    })
}