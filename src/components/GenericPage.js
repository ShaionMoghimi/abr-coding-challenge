import AverageDisplay from "./AverageDisplay";

export default function GenericPage({regionData, region}) {
  const filteredRegionData = regionData.filter(r => r.region === region)[0];
  
  return (
    <div>
      <AverageDisplay avgCals={filteredRegionData.avgCals} avgFat={filteredRegionData.avgFat} />
    </div>
  )
}