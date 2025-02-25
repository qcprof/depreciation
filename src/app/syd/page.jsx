"use client";
import { useState } from "react";

export default function Page() {
  const [cost, setCost] = useState(10000);
  const [salvageValue, setSalvageValue] = useState(1000);
  const [usefulLife, setUsefulLife] = useState(3);
  const [annualDepreciation, setAnnualDepreciation] = useState(0);

  const calculateDepreciation = (year) => {
    const syd = usefulLife * (usefulLife + 1) / 2
    const depreciation = (cost - salvageValue) * year/syd;
     setAnnualDepreciation(depreciation);
   };

   return (
     <>
       <h1 className="ml-5 mb-4 text-3xl text-gray-600 ">SYD</h1>
       <div className="space-y-4 max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
         <div className="space-y-2">
           <label
             htmlFor="cost"
             className="block text-sm font-medium text-gray-700"
           >
             Cost
           </label>
           <input
             type="number"
             name="cost"
             id="cost"
             value={cost}
             onChange={(e) => setCost(parseInt(e.target.value))}
             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
           />
         </div>

         <div className="space-y-2">
           <label
             htmlFor="sv"
             className="block text-sm font-medium text-gray-700"
           >
             Salvage Value
           </label>
           <input
             type="number"
             name="sv"
             id="sv"
             value={salvageValue}
             onChange={(e) => setSalvageValue(parseInt(e.target.value))}
             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
           />
         </div>

         <div className="space-y-2">
           <label
             htmlFor="ul"
             className="block text-sm font-medium text-gray-700"
           >
             Useful Life
           </label>
           <input
             type="number"
             name="ul"
             id="ul"
             value={usefulLife}
             onChange={(e) => setUsefulLife(parseInt(e.target.value))}
             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
           />
         </div>

         <button
           className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
           onClick={() => calculateDepreciation(3)}
         >
           Calculate Depreciation for Year 1
         </button>

         <button
           className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
           onClick={() => calculateDepreciation(2)}
         >
           Calculate Depreciation for Year 2
         </button>

         <button
           className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
           onClick={() => calculateDepreciation(1)}
         >
           Calculate Depreciation for Year 3
         </button>
       </div>
       <p>Annual depreciation is {annualDepreciation}</p>
     </>
   );
}
