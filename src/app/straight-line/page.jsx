export default function Page() {
  const cost = 10000
  const salvageValue = 1000
  const usefulLife = 3
  
  const annualDepreciation = (cost - salvageValue) / usefulLife
  return (
    <>
      <h1 className="ml-5 mb-4 text-3xl text-gray-600 ">Straight Line</h1>
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Calculate
        </button>
      </div>
      <p>Annual depreciation is {annualDepreciation}</p>
    </>
  );
}
