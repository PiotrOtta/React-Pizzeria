import React, {useState} from 'react'
import styles from './Cart.module.css'
var uniqid = require('uniqid');

const Cart = ({cart, removeFromCart}) => {
    let kosztDodatkow = 0;
    const cartList = cart.map(item => {
        kosztDodatkow+=item.addonPrice
        return (
            <div key={uniqid()} className={styles.pizza}>
            <span className={styles.numer}>Nr.{item.id}</span>
            <img src={item.photo} alt={item.name}/>
                <div className={styles.container}>
                    <h3> {item.name} </h3>
                    <span>Cena elementu: {item.price + item.addonPrice} zł</span>
                    {item.selectedSize?.map((element) => {
                        return (
                            <div key={uniqid()}>
                                <p>
                                    {element}
                                </p>
                            </div>
                        )
                    })}
                    <span className={styles.usun} onClick={() => removeFromCart(item.id)}> Usuń </span>
                    <span className={styles.dodatki}> 
                    W tym cena dodatków: {item.addonPrice} zł <br />
                    Ilość dodatków: {item.numberOfAddons} 
                    </span>
                </div>
            </div>
        )
    })

let cena = kosztDodatkow;
cart.forEach(element => {
    cena += element.price
});
const CenaHTML = () => {
    // eslint-disable-next-line
    if(cart.length==0)return (<span>Brak produktów</span>)
    // eslint-disable-next-line
    if(order.length!=0)return(<div>
        <h4>Zamówiono na dane</h4>
        <span>{orderName} {orderSurName}</span><br/>
        <span>{orderStreet} {orderPhone}</span>
        <h5>Czas oczekiwania: około {(10 + Math.random()* (60-10)).toFixed(0)} minuty</h5>
    </div>)
    return(
    <span>
    Cena za wszystkie produkty: 
        <p style={{backgroundColor: 'rgb(196, 15, 15)', padding: '10px', color: 'white', borderRadius: '10px'}}>
            {cena} zł
        </p> 
    </span>)
}

const [orderName, setOrderName]         = useState("")
const [orderSurName, setOrderSurName]   = useState("")
const [orderStreet, setOrderStreet]     = useState("")
const [orderPhone, setOrderPhone]       = useState("")
const [order, setOrder]                 = useState([])
const HandleZamow = () => {
    const temp = {
        id:         uniqid(),
        name:       orderName,
        surname:    orderSurName,
        street:     orderStreet,
        phone:      orderPhone
    }
    // eslint-disable-next-line
    if(orderPhone == "" || orderStreet == "" || cart.length == 0)return
    setOrder(temp)
}

    return (
        <div style={{position: 'relative'}}>
            <div className={styles.pizzas}>
                <div className={styles.pizza}>
                <CenaHTML/>
                </div>
                {cartList}
            </div>
            <div className={styles.zamowContainer}>
                <button className={styles.zamow} onClick={() => HandleZamow()}> Zamów </button>
                <div className={styles.zamowienie}>
                    <div className={styles.zamowienieLeft}> 
                        <label htmlFor="name">Imię: </label>
                        <input onChange={(e) => setOrderName(e.target.value)} value={orderName} type="text" name="name" id="name" />
                        <label htmlFor="surname">Nazwisko: </label>
                        <input onChange={(e) => setOrderSurName(e.target.value)} value={orderSurName} type="text" name="surname" id="surname" />
                    </div>
                    <div className={styles.zamowienieCenter}> 
                        <label htmlFor="street">Ulica: </label>
                        <input onChange={(e) => setOrderStreet(e.target.value)} value={orderStreet}  type="text" name="street" id="street" />
                    </div>
                    <div className={styles.zamowienieRight}> 
                        <label htmlFor="phone">Telefon: </label>
                        <input onChange={(e) => setOrderPhone(e.target.value)} value={orderPhone}  type="text" name="phone" id="phone" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
