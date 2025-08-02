import React from "react";

function MenuHotCoffeeItems() {
  const brewedCoffee = [
    { name: "Blonde Roast - Sunsera", image: "#" },
    { name: "Medium Roast - Pike Place Roast", image: "#" },
    { name: "Dark Roast - Sumatra", image: "#" },
    { name: "Dark Roast - Caffe Verona", image: "#" },
    { name: "Decafe Roast - Pike Place Roast", image: "#" },
    { name: "Caffe Misto", image: "3" },
  ];

  return (
    <div className="flex flex-col gap-10 py-4">
      <div className="border-b py-4">
        <span className="font-bold text-xl">Brewed Coffee</span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {brewedCoffee.map((coffee, i) => (
          <div key={i} className="flex flex-col h-60 items-center">
            <div className="border w-full h-full">
              <div className="border rounded-full h-44">
                <img src={coffee.image} alt="Image" />
              </div>

              <span className="text-center">{coffee.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuHotCoffeeItems;
