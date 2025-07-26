import { Button } from "@/components/ui/button";

function MenuCapsules() {
  const drinks = [
    { name: "Hot Coffee", link: "" },
    { name: "Cold Coffee", link: "" },
    { name: "Hot Tea", link: "" },
    { name: "Iced Tea", link: "" },
    { name: "Refreshers", link: "" },
    { name: "Frappuccino Blended Beverages", link: "" },
    { name: "Hot Chocolate, Lemonade & More", link: "" },
    { name: "Bottled Beverages", link: "" },
  ];

  const foods = [
    { name: "Breakfast", link: "" },
    { name: "Bakery", link: "" },
    { name: "Treats", link: "" },
    { name: "Lunch", link: "" },
    { name: "Snack", link: "" },
  ];

  const atHomeCoffees = [
    { name: "Whole Bean", link: "" },
    { name: "Via Instant", link: "" },
    { name: "Shopping Bag", link: "" },
  ];

  return (
    <div>
      <div className="flex flex-col gap-6 w-full pb-20 px-4">
        <span className="text-2xl font-bold tracking-wide">Menu</span>

        <div className="flex flex-col gap-10">
          <span className="text-xl font-bold tracking-wide border-b pb-6">
            Drinks
          </span>

          <div className="flex flex-col gap-2 w-full">
            {drinks.map((drink, i) => (
              <div key={i} className="w-full">
                <Button variant="default" className="w-full rounded-full">
                  {drink.name}
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <span className="text-xl font-bold tracking-wide border-b pb-6">
            Food
          </span>

          <div className="flex flex-col gap-2 w-full">
            {foods.map((food, i) => (
              <div key={i} className="w-full">
                <Button variant="default" className="w-full rounded-full">
                  {food.name}
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <span className="text-xl font-bold tracking-wide border-b pb-6">
            At Home Coffee
          </span>

          <div className="flex flex-col gap-2 w-full">
            {atHomeCoffees.map((atHomeCoffee, i) => (
              <div key={i} className="w-full">
                <Button variant="default" className="w-full rounded-full">
                  {atHomeCoffee.name}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuCapsules;
