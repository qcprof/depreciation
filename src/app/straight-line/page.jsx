export default function Page() {
  const cost = 10000
  const salvageValue = 1000
  const usefulLife = 3
  const annualDepreciation = (cost - salvageValue) / usefulLife
  return (
    <>
      <h1 className="ml-5 mb-4 text-3xl text-gray-600 ">Straight Line</h1>
      <p>Annual depreciation is {annualDepreciation}</p>
    </>
  );
}
