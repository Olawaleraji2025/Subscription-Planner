import "./App.css";
import { toast } from "sonner";
import { FieldDemo } from "./components/Layout/PersonalInfoField";
import { Header } from "./components/Layout/Top-Header";
import { Button } from "./components/ui/button";
import { PlanSelection } from "./components/Layout/PlanComponent";
import { AddOnPage } from "./components/Layout/AddOnsPage";
import { ConfirmPage } from "./components/Layout/LastPage";
import { ThankYouPage } from "./components/Layout/ThankyouPage";
import { useSelector, useDispatch } from "react-redux";
import { nextPage, prevPage } from "./features/stepperSlice";
import {
  validateAll,
  selectPersonalInfoErrors,
  selectPersonalInfoValues,
} from "./features/personalInfo";
import { LeftSideBar } from "./components/Layout/SideBar";

function App() {
  const dispatch = useDispatch();
  const activePage = useSelector((state) => state.stepper.activePage);
  const errors = useSelector(selectPersonalInfoErrors);
  const values = useSelector(selectPersonalInfoValues);

  const hasNoErrors = Object.values(errors).every((error) => error === "");
  const fieldsNotEmpty =
    values.name.trim() !== "" &&
    values.email.trim() !== "" &&
    values.phone.trim() !== "";
  const isFormValid = hasNoErrors && fieldsNotEmpty;
  const pages = [
    <FieldDemo />,
    <PlanSelection />,
    <AddOnPage />,
    <ConfirmPage />,
    <ThankYouPage />,
  ];

  return (
    <>
      <div className="block min-h-screen ">
        <Header activePage={activePage + 1} />
        <div className="bg-[#edf3fb] min-h-screen md:flex justify-center mx-auto my-0">
          <div className="flex absolute top-[12%] justify-center bg-transparent shadow-none w-full md:grid grid-cols-[200px_520px] md:bg-white items-center pt-4 md:shadow-md my-0 mx-auto md:w-180">
            <div className="hidden md:block ">
              <LeftSideBar activePage={activePage + 1}/>
            </div>
            <div className="max-w-[490px]">
              {pages[activePage] || null}

              {activePage <= 3 && (
                <section
                  className={`m-0 w-75 flex ${activePage === 0 ? "justify-end" : "justify-between"} md:mx-3 my-6 items-center pt-4 md:justify-spacebetween md:w-full`}
                >
                  {activePage > 0 ? (
                    <button
                      onClick={() => dispatch(prevPage())}
                      className="text-sm text-gray-500 hover:underline hover:text-blue-950 md:ml-7.5"
                    >
                      Go Back
                    </button>
                  ) : null}
                  <Button
                    disabled={activePage === 0 && !isFormValid}
                    onClick={() => dispatch(nextPage())}
                    className={
                      activePage === 3
                        ? "bg-[#483EFF] hover:bg-[#483EFF]/90"
                        : ""
                    }
                  >
                    {activePage === 3 ? "Confirm" : "Next Step"}
                  </Button>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
