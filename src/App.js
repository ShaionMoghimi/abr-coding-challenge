import './App.css';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import HomePage from './components/HomePage';
import GenericPage from './components/GenericPage';

const API = 'http://localhost:5001/gofish?apikey=abrradiology';

const getAverageCaloriesAndFat = (fish) => {
  let filteredFish = fish.filter(f => !!f.Calories);
  let totalCals = filteredFish.reduce((acc, f) => parseFloat(f.Calories) + acc, 0);
  const averageCalories = (totalCals/filteredFish.length).toFixed();
  
  filteredFish = fish.filter(f => !!f.FatTotal);
  let totalFat = filteredFish.reduce((acc, f) => parseFloat(f.FatTotal.split(' ')[0]) + acc, 0);
  const averageFat = (totalFat/filteredFish.length).toFixed();

  return [averageCalories, averageFat];
}

function App() {
  const [regionData, setRegionData] = useState([]);
  const [page, setPage] = useState('Home');

  useEffect(() => {
    fetch(API,
    {
      method: "GET",
    })
    .then(res => res.json())
    .then(response => {
      let regions = new Set();
      response.forEach(fishery => regions.add(fishery.NOAAFisheriesRegion));
      let totalRegionData = [];
      Array.from(regions).forEach(region => {
        let rd = {};
        rd.region = region;
        const fish = response.filter(fishery => fishery.NOAAFisheriesRegion === region);
        const [avgCalories, avgFat] = getAverageCaloriesAndFat(fish);
        rd.fisheries = fish;
        rd.avgCals = avgCalories;
        rd.avgFat = avgFat;
        totalRegionData.push(rd);
      })
      setRegionData(totalRegionData);
    });
  }, []);

  const regions = regionData.map(region => region.region);
  regions.unshift('Home');
  return (
    <div className="Fisheries">
      <Navbar regions={regions} onClick={setPage} />
      <header className="body">
        <h1>{page}</h1>
        {page === 'Home' && <HomePage regionData={regionData} />}
        {page !== 'Home' && <GenericPage regionData={regionData} region={page} />}
      </header>
    </div>
  );
}

export default App;
