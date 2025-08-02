export interface Drink {
  id: number;
  name: string;
  type: string;
  image: string;
  description?: string;
  caffeine?: number;
  calories?: number;
  fat?: number;
  price?: string;
  rating?: number;
  reviews?: number;
  sugar?: number;
}

export const fetchHotDrinks = async (): Promise<Drink[]> => {
    const res = await fetch('/api/get-all-hot-drink');
    if (!res.ok) {
        throw new Error("Failed to fetch drinks")
    }
    const data = await res.json()
    return data.data
}