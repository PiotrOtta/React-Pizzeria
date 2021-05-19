import './App.css';
import Header from './header'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {useState} from 'react'
import pizzas from './Pizzas'
import PizzaDetails from './PizzaDetails'
import Cart from './Cart'
import PizzasList from './PizzasList'

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (idx, size, addons, addonprice) => {
    const pizza = pizzas.find(item => item.id === idx)
    let price   = 0;
    size.forEach(element => {
      // eslint-disable-next-line
      price    += (pizza.avaiableSizes.find(elem => elem.name == element)).price
    });
    const item  = {id: pizza.id, name: pizza.name, selectedSize: size, price: price, photo: pizza.photo, numberOfAddons: addons.length, addonPrice: addonprice}
    const tmp   = [...cart, item]
    setCart(tmp)
  }
  const removeFromCart = (id) => {
    const tmp   = [...cart]
    tmp.splice(tmp.findIndex(obj => obj.id === id), 1)
    setCart(tmp)
  }
/*  ┌──────────────────────────────────────────────────────────────┐
    │ Wyświetlenie loga oraz przycisku "Koszyk" - header.js        │
    │ Wyświetlenie wszystkich pizz - PizzaDetails.js               │
    │ Wyświetlenie detali wciśniętej pizzy - PizzaDetails.js       │
    │ Wyświetlenie koszyka z dodanymi elementami - PizzaDetails.js │
    └──────────────────────────────────────────────────────────────┘ */
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/"             exact component =  {PizzasList}     />
        <Route path="/details/:id"  render={(props) => <PizzaDetails {...props} addToCart = {addToCart}/>} />
        <Route path="/cart"         render={(props) => <Cart         {...props} cart      = {cart} removeFromCart = {removeFromCart}/>}  />
      </Router>
    </div>
  );
}

export default App;
