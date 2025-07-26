import { fetchHotDrinks } from "@/clients/menu.clients";
import { useQuery } from "@tanstack/react-query";

const HOT_DRINKS = 'hotDrinks'

export function useHotDrinkList() {
    return useQuery({
        queryKey: [HOT_DRINKS],
        queryFn: fetchHotDrinks
    })
}