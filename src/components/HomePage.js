import AverageDisplay from "./AverageDisplay"

export default function HomePage({regionData}) {
  return (
    <div>
      {regionData.map(region => {
        return (
          <div>
            <h3>{region.region}</h3>
            <AverageDisplay avgCals={region.avgCals} avgFat={region.avgFat} />
        </div>
        )
      })}
    </div>
  )
}