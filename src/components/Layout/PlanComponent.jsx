import { Switch } from "/src/components/ui/switch";
import { Label } from "/src/components/ui/label";
import { Button } from "/src/components/ui/button";
import { useSelector, useDispatch } from "react-redux";
import { setPlan, setBilling, setPlanPrice } from "/src/features/planSelect";

export function PlanSelection() {
  const dispatch = useDispatch();
  const currentStore = useSelector((state) => state.theUserPlans);

  // Plans data available for both rendering and handlers
  const plans = [
    {
      id: "Arcade",
      img: "/src/assets/images/icon-arcade.svg",
      title: "Arcade",
      monthly: 9,
      yearly: 90,
    },
    {
      id: "Advanced",
      img: "/src/assets/images/icon-advanced.svg",
      title: "Advanced",
      monthly: 12,
      yearly: 120,
    },
    {
      id: "Pro",
      img: "/src/assets/images/icon-pro.svg",
      title: "Pro",
      monthly: 15,
      yearly: 150,
    },
  ];

  const handlePlanSelect = (planId) => {
    // Find the selected plan to get the correct price based on billing mode
    const plan = plans.find((p) => p.id === planId);
    const price = currentStore.isMonthly ? plan.monthly : plan.yearly;
    dispatch(setPlan(planId));
    dispatch(setPlanPrice(price));
  };

  const handleToggleBilling = (checked) => {
    // checked = true means Yearly is selected
    dispatch(setBilling(!checked));

    // Update price for currently selected plan if any
    const selectedPlan = plans.find(
      (p) => p.id === currentStore.activePlanName,
    );
    if (selectedPlan) {
      const newPrice = checked ? selectedPlan.yearly : selectedPlan.monthly;
      dispatch(setPlanPrice(newPrice));
    }
  };

  console.log(currentStore);

  return (
    <>
      <div className="w-full shadow-lg mx-auto my-0 z-10 p-6.25 max-w-75 bg-white rounded-lg md:shadow-none md:max-w-120 md:ml-5">
        <section>
          <h2 className="text-xl text-blue-950 font-bold md:text-2xl">
            Select your plan
          </h2>
          <p className="text-md text-gray-400 my-2">
            You have the option of yearly billing
          </p>
        </section>
        <section className="flex flex-col w-auto md:h-46 md:gap-3.75 md:w-108 md:flex-row">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`my-2 mx-0 gap-2 w-auto border-2 rounded-lg flex md:gap-4 p-2 md:my-4 cursor-pointer transition-all ${
                currentStore.activePlanName === plan.id
                  ? "border-purple-600"
                  : "hover:border-gray-300"
              } md:flex-col w-37.5 md:gap-8 md:w-full`}
              onClick={() => handlePlanSelect(plan.id)}
            >
              <img src={plan.img} alt={plan.title} className="w-10" />
              <div>
                <p
                  className={`font-bold text-blue-950 ${plan.title === "Arcade" ? "text-sm" : ""}`}
                >
                  {plan.title}
                </p>
                <span className="text-gray-400 text-sm">
                  ${!currentStore.isMonthly ? plan.yearly : plan.monthly}/
                  {!currentStore.isMonthly ? "yr" : "mo"}
                </span>
                {!currentStore.isMonthly && (
                  <span className="text-xs py-0.5 rounded-full font-bold block text-blue-950">
                    2 months free
                  </span>
                )}
              </div>
            </div>
          ))}
        </section>
        <section>
          <div className="flex items-center space-x-2 justify-center my-8 gap-4">
            <Label
              htmlFor="Monthly"
              className={`${currentStore.isMonthly ? "text-blue-950" : "text-gray-400"}`}
            >
              Monthly
            </Label>
            <Switch
              id="toggle"
              checked={!currentStore.isMonthly}
              onCheckedChange={(checked) => handleToggleBilling(checked)}
            />
            <Label
              htmlFor="Yearly"
              className={`${!currentStore.isMonthly ? "text-blue-950" : "text-gray-400"}`}
            >
              Yearly
            </Label>
          </div>
        </section>
      </div>
    </>
  );
}
