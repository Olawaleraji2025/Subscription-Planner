import { Checkbox } from "/src/components/ui/checkbox";
import { useSelector, useDispatch } from "react-redux";
import { toggleAddOn } from "/src/features/Adons";

export function AddOnPage() {
  const Ads = [
    {
      headerText: "Online service",
      normalText: "Access to multiplayer games",
      price: 1,
    },
    {
      headerText: " Larger storage",
      normalText: "Extra 1TB of cloud save",
      price: 2,
    },
    {
      headerText: "Customizable Profile",
      normalText: "Custom theme on your profile",
      price: 2,
    },
  ];

  const dispatch = useDispatch();
  // currentAdon go be like: { selectedAddOns: [{name, price}, {name, price}] }
  const currentAdon = useSelector((state) => state.theSelectedAdon);

  function handleAdonSelect(AdInfo, AdPrice) {
    // Send one object as payload (like putting everything inside one envelope)
    dispatch(toggleAddOn({ name: AdInfo, price: AdPrice }));
  }

  // Helper to check if particular add-on dey selected
  const isSelected = (name) => {
    return currentAdon.selectedAddOns?.some((addon) => addon.name === name);
  };

  return (
    <>
      <div className="w-full shadow-lg mx-auto my-0 z-10 p-6.25 max-w-75 bg-white rounded-lg md:shadow-none md:max-w-120">
        <section>
          <h2 className="text-xl text-blue-950 font-bold">Pick add-ons</h2>
          <p className="text-md text-gray-400 my-2">
            Add-ons help enhance your gaming experience.
          </p>
        </section>
        {Ads.map((Ad, id) => (
          <section key={id}>
            {/* Clicking anywhere on the card go toggle the add-on */}
            <div
              // onClick={() => handleAdonSelect(Ad.headerText, Ad.price)}
              className={`flex items-center gap-4 my-8 border rounded-lg p-2 cursor-pointer transition-colors ${
                isSelected(Ad.headerText)
                  ? "border-blue-700 bg-blue-50"
                  : "border-gray-300 bg-white hover:border-blue-400"
              }`}
            >
              <Checkbox
                checked={isSelected(Ad.headerText)}
                onCheckedChange={() =>
                  handleAdonSelect(Ad.headerText, Ad.price)
                }
              />
              <div className="flex-1">
                <p className="text-sm font-bold text-blue-950">
                  {Ad.headerText}
                </p>
                <span className="text-[12px] text-gray-400">
                  {Ad.normalText}
                </span>
              </div>
              <div>
                <span className="text-sm text-purple-600">+${Ad.price}/mo</span>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
