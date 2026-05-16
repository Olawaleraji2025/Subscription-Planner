import { useState } from "react";

export function Header({ activePage = 1 }) {
  const pageNumber = [1, 2, 3, 4];

  return (
    <>
      <div className="bg-[url('/src/assets/images/bg-sidebar-mobile.svg')] bg-cover bg-center h-36 flex justify-center gap-3 md:hidden">
        {pageNumber.map((pN) => (
          <div key={pN} className="mt-6 ">
            <span
              className={`block font-bold text-[15px] border rounded-3xl px-3 py-1 ${pN === activePage ? "text-blue-950 bg-[#cbe1ff]" : "bg-transparent text-white"}`}
            >
              {pN}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
