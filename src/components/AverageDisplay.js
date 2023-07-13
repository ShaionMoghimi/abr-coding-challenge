export default function AverageDisplay({avgCals, avgFat}) {
  return (
    <div>
      <span>Average Calories: {avgCals}</span>
      <span> | Average Fat: {avgFat}g</span>
    </div>
  )
}