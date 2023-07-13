import AverageDisplay from "./AverageDisplay";
import FishTable from "./FishTable";

export default function GenericPage({regionData, region}) {
  const filteredRegionData = regionData.filter(r => r.region === region)[0];
  
  return (
    <div className="body">
      <AverageDisplay avgCals={filteredRegionData.avgCals} avgFat={filteredRegionData.avgFat} />
      <FishTable fish={filteredRegionData.fisheries} />
    </div>
  )
}