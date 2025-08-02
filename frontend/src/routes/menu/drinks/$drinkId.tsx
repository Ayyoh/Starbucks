import { useHotDrinkList } from "@/hooks/menu.hooks";
import { createFileRoute, useParams } from "@tanstack/react-router";

export const Route = createFileRoute("/menu/drinks/$drinkId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { drinkId } = useParams({ from: "/menu/drinks/$drinkId" });

  const { data: hotDrinks = [] } = useHotDrinkList();
  const drink = hotDrinks.find((d) => String(d.id) === drinkId);

  if (!drink) {
    return <div className="text-center py-20 text-red-500 font-semibold">Drink not found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src={drink.image}
          alt={drink.name}
          className="w-60 h-60 rounded-full object-cover shadow-lg border border-neutral-300"
        />
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold text-neutral-800">{drink.name}</h1>
          <p className="text-neutral-600">{drink.description}</p>
          <div className="grid grid-cols-2 gap-4 text-sm text-neutral-700">
            <div>
              <strong>Type:</strong> {drink.type}
            </div>
            <div>
              <strong>Price:</strong> ${drink.price}
            </div>
            <div>
              <strong>Calories:</strong> {drink.calories} kcal
            </div>
            <div>
              <strong>Caffeine:</strong> {drink.caffeine} mg
            </div>
            <div>
              <strong>Sugar:</strong> {drink.sugar} g
            </div>
            <div>
              <strong>Fat:</strong> {drink.fat} g
            </div>
            <div>
              <strong>Rating:</strong> ⭐ {drink.rating} ({drink.reviews} reviews)
            </div>
            {/* <div>
              <strong>Status:</strong> {drink.isAvailable ? "Available" : "Unavailable"}
            </div>
            {drink.isFeatured && <div className="col-span-2 text-green-600 font-semibold">🌟 Featured Drink!</div>} */}
          </div>
        </div>
      </div>
    </div>
  );
}
