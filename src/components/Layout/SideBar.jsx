export function LeftSideBar({ activePage = 1 }) {
    const pageNumber = [1, 2, 3, 4];
    const pageInfo = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMARY"];
  return (
    <>
      <section className="md:bg-[url('/src/assets/images/bg.png')] bg-position-[70%] bg-no-repeat bg-cover h-115 relative mx-auto my-0 z-10 p-6.25 w-50 md:flex flex-col md:items-baseline">
      {pageNumber.map((pN) => (
          <div key={pN} className="mt-6 flex justify-center items-center gap-3">
            <span
              className={`inline-block font-bold text-[15px] border rounded-3xl px-3 py-1 ${pN === activePage ? "text-blue-950 bg-[#cbe1ff]" : "bg-transparent text-white"}`}
            >
              {pN}
            </span>
            <div>
             <p className="text-sm text-gray-400 mt-1">
              STEP {pN}
             </p> 
             <p className="font-bold text-sm text-white">
              {pageInfo[pN - 1]}
             </p> 
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
