import { useEffect, useState } from 'react';
import './App.css'
import Card from './Components/Card/Card';
import Cart from './Components/Cart/Cart';
import NavBar from './Components/NavBar/NavBar';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish').then(res => res.json())
      .then(data => setData(data.meals))
  }, []);
  // console.log(data);
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="container">
        <div className="card-item">
         {/* <Card data={data}></Card> */}
         {
            data.map(item => <Card key={item.idMeal} data={item}></Card>)
         }
        </div>
        <div className="">
          <Cart /> 
        </div>
      </div>
    </div>
  )
}

export default App
