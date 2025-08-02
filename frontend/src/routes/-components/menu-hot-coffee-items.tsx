import { useHotDrinkList } from "@/hooks/menu.hooks";
import type { Drink } from "@/clients/menu.clients"; // make sure this points to where you defined the full Drink type
import { Link } from "@tanstack/react-router";

const brewedCoffeeNames = [
  "Blonde Roast - Sunsera",
  "Medium Roast - Pike Place Roast",
  "Dark Roast - Sumatra",
  "Dark Roast - Caffe Verona",
  "Decaf Roast - Pike Place Roast",
  "Caffe Misto",
];

const latteCoffeeNames = [
  "Caffe Latte",
  "Cinnamon Dolce Latte",
  "Starbucks Blonde Vanilla Latte",
  "Lavender OatMilk Latte",
];

const mochaCoffeeNames = ["Caffe Mocha", "White Chocolate Mocha"];

const macchiatoCoffeeNames = ["Espresso Macchiato", "Caramel Macchiato"];

const cortadoCoffeeNames = [
  "Cortado",
  "Brown Sugar Oatmilk Cortado"
]

const espressoCoffeeNames = [
  "Espresso",
  "Espresso Con Panna"
]

const DrinkSection = ({ title, drinks }: { title: string; drinks: Drink[] }) => (
  <div className="flex flex-col gap-10 py-4">
    <div className="border-b py-4">
      <span className="font-bold text-xl">{title}</span>
    </div>

    <div className="grid grid-cols-2 gap-4">
      {drinks.map((drink, i) => (
        <Link key={drink.id} to="/menu/drinks/$drinkId" params={{ drinkId: String(drink.id) }}>
          <div key={i} className="flex flex-col h-60 items-center">
            <div className="flex flex-col items-center w-full h-full">
              <div className="flex justify-center rounded-full h-44">
                <img src={drink.image} alt={drink.name} className="rounded-full h-44" />
              </div>

              <span className="text-lg font-semibold text-center">{drink.name}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

function MenuHotCoffeeItems() {
  const { data: hotDrinks = [] } = useHotDrinkList();

  const sections = [
    {
      title: "Brewed Coffee",
      drinks: hotDrinks.filter((drink) => brewedCoffeeNames.includes(drink.name)),
    },
    {
      title: "Americano",
      drinks: hotDrinks.filter((drink) => drink.name === "Caffe Americano"),
    },
    {
      title: "Latte",
      drinks: hotDrinks.filter((drink) => latteCoffeeNames.includes(drink.name)),
    },
    {
      title: "Cappuccino",
      drinks: hotDrinks.filter((drink) => drink.name === "Cappuccino"),
    },
    {
      title: "Mocha",
      drinks: hotDrinks.filter((drink) => mochaCoffeeNames.includes(drink.name)),
    },
    {
      title: "Macchiato",
      drinks: hotDrinks.filter((drink) => macchiatoCoffeeNames.includes(drink.name)),
    },
    {
      title: "Flat White",
      drinks: hotDrinks.filter((drink) => drink.name === "Flat White")
    },
    {
      title: "Cortado",
      drinks: hotDrinks.filter((drink) => cortadoCoffeeNames.includes(drink.name))
    },
    {
      title: "Espresso",
      drinks: hotDrinks.filter((drink) => espressoCoffeeNames.includes(drink.name))
    },
  ];

  return (
    <div>
      {sections.map(({ title, drinks }) => (
        <DrinkSection key={title} title={title} drinks={drinks} />
      ))}
    </div>
  );
}

export default MenuHotCoffeeItems;
