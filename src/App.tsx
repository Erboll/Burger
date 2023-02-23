import React, {useState} from 'react';
import IngredientComp from "./components/Ingredient/IngredientComp";
import './App.css';
import './components/Burger/Burger.css';
import meatImg from './assets/meat.jpg'
import saladImg from './assets/salad.jpg'
import cheeseImg from './assets/cheese.jpg'
import baconImg from './assets/bacon.jpg'
import Burger from "./components/Burger/Burger";


interface Ingredient {
  name: string;
  price: number;
  img: string;
}

const INGREDIENTS: Ingredient[] = [
  {name: 'Meat', price: 80, img: meatImg},
  {name: 'Cheese', price: 80, img: cheeseImg},
  {name: 'Salad', price: 10, img: saladImg},
  {name: 'Bacon', price: 80, img: baconImg},
]

function App() {
  const [ingredients, setIngredients] = useState([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
    {name: 'Bacon', count: 0}
  ]);
  const salad = 'Salad';
  const cheese = 'Cheese';
  const meat = 'Meat'

  const changeCount = (ingName: string) => {
    setIngredients(prevState => {
      return prevState.map(ing => {
        if (ing.name === ingName) {
          return {...ing, count: ing.count + 1}
        }
        return ing
      })
    })
  }
  const getCount = (ingName: string) => {
    const ingCount = ingredients.find(i => i.name === ingName);
    if (ingCount) {
      return ingCount.count
    }
    return 0
  }


  return (
    <div className="container">
      <div className="ingredient-half">
        <h1 style={{textAlign: "center"}}>Ingredients</h1>
        <div className="countNames">
          <div className="img-btn">
            {INGREDIENTS.map((ingredient) => (
              <IngredientComp
                onButtonClick={() => changeCount(ingredient.name)}
                image={ingredient.img}
                name={ingredient.name}
                count={getCount(ingredient.name)}
                key={Math.random()}/>
            ))}
          </div>
        </div>
      </div>
      <div className="burger-half">
        <h1 style={{textAlign: 'center'}}>Burger</h1>
        <Burger saladBurger={salad} cheeseBurger={cheese} meatBurger={meat}/>
      </div>
    </div>
  );
}


export default App;
