import { useSelector, useDispatch } from "react-redux";
import { setPage } from "/src/features/stepperSlice";

export function ConfirmPage() {
  const currentPlanDetails = useSelector((state) => state.theUserPlans);
  const currentAdons = useSelector((state) => state.theSelectedAdon);
  const dispatch = useDispatch();

  return (
    <>
      <div className="w-full shadow-lg mx-auto my-0 z-10 p-6.25 max-w-75 bg-white rounded-lg md:shadow-none md:max-w-120">
        <section>
          <h3 className="text-xl text-blue-950 font-bold">Finishing up</h3>
          <p className="text-sm text-gray-400 my-2">
            Double-check everything looks OK before confirming
          </p>
        </section>
        <section className="p-2 bg-blue-50 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="py-2">
              <p className="text-blue-950 font-bold text-sm">
                {currentPlanDetails.activePlanName} (
                {currentPlanDetails.isMonthly ? "Monthly" : "Yearly"})
              </p>
              <span
                className="text-gray-400 text-sm underline hover:cursor-pointer"
                onClick={() => dispatch(setPage(1))}
              >
                Change
              </span>
            </div>
            <div>
              <span className="text-blue-950 font-bold text-sm">
                ${currentPlanDetails.price}/
                {currentPlanDetails.isMonthly ? "mo" : "yr"}
              </span>
            </div>
          </div>

          <hr />

          {/* Map over all selected addons to display each one in a row */}
          {currentAdons.selectedAddOns?.map((addon, index) => (
            <div key={index} className="flex items-center justify-between py-2">
              <p className="text-gray-400 text-sm">{addon.name}</p>
              <span className="text-blue-900 font-bold text-sm">
                +${addon.price}/{currentPlanDetails.isMonthly ? "mo" : "yr"}
              </span>
            </div>
          ))}
        </section>
        {/* Total section: sums plan price + all selected addon prices */}
        <section>
          <div className="flex justify-between text-sm p-2.5">
            <span className="text-gray-400">
              Total ({currentPlanDetails.isMonthly ? "per month" : "per year"})
            </span>
            <span className="text-blue-700 font-bold">
              {" "}
              $
              {currentPlanDetails.price +
                (currentAdons.selectedAddOns?.reduce(
                  (sum, addon) => sum + Number(addon.price || 0),
                  0,
                ) || 0)}
              /{currentPlanDetails.isMonthly ? "mo" : "yr"}
            </span>
          </div>
        </section>
      </div>
    </>
  );
}
