import React from 'react'
import pizzas from './Pizzas'
import styles from './PizzaDetails.module.css'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import pizzaAddonsFromDatabase from './pizzaAddons'

const PizzaDetails = ({match, addToCart}) => {
    // eslint-disable-next-line
    const pizza = (pizzas.find(prod => match.params.id == prod.id))
    const [size, setsize] = useState([])
    const [addons, setaddons] = useState([])
    const [button_text, setbutton_text] = useState("Dodaj do koszyka")

    let pizzaAddons = pizzaAddonsFromDatabase.map(item => {
        if(pizza.addons.includes(item.id)) return item
        else return null
    })
    pizzaAddons = pizzaAddons.filter(item => item != null)

    const SelectedSize = (e, check) => {
        // eslint-disable-next-line
        if(check == true){
            const temp = [...size, e]
            setsize(temp)
        }
        else {
            let temp = [...size]
            // eslint-disable-next-line
            temp.splice(temp.indexOf(e),1)
            setsize(temp)
        }
    }
    const SelectedAddons = (e, check) => {
        // eslint-disable-next-line
        if(check == true){
            const temp = [...addons, e]
            setaddons(temp)
        }
        else {
            let temp = [...addons]
            // eslint-disable-next-line
            temp.splice(temp.indexOf(e),1)
            setaddons(temp)
        }
    }
    const SendPizzaToCart = () => {
        // eslint-disable-next-line
        if(size.length==0) return setbutton_text("Wybierz wielkość pizzy!")
        let price = 0;
        // eslint-disable-next-line
        if(addons.length!=0){
            addons.forEach(element => {
            // eslint-disable-next-line
            price += (pizzaAddons.find(elem => elem.name == element)?.price)
            });
        }
        setbutton_text("Dodaj do koszyka")
        addToCart(pizza.id, size, addons, price)
    }
    const SelectedPizzaPrice = () => {
        let price = 0;
        size.forEach(element => {
            // eslint-disable-next-line
            price += (pizza.avaiableSizes.find(elem => elem.name == element)?.price)
        });
        addons.forEach(element => {
            // eslint-disable-next-line
            price += pizzaAddons.find(item => item.name == element)?.price
        })
        return price + " zł";
    }
    

    return (
        <div className={styles.container}>
            <div className={styles.details}>
            <Link to="/" className={styles.button_return}>
                Powrót
            </Link>
                <div className={styles.detailsAddons}>
                    <h3>Dodatki</h3>
                    {pizzaAddons.map((element) => {
                    return (
                        <div key={element?.id} className={styles.checkboxstyle}>
                            <input type="checkbox" id={element?.id + "addon"} name={element?.name} onChange={(e)=> {SelectedAddons(e.target.name, e.target.checked)}} />
                            <label htmlFor={element?.id + "addon"}>{element?.name} - {element?.price} zł</label>
                        </div>
                    )
                    })}
                </div>
                <div className={styles.detailsLeft}>
                    <h3> Podsumowanie</h3>
                    <p> Cena: <SelectedPizzaPrice /></p>
                    <p onClick={()=> {SendPizzaToCart()}} className={styles.button}> {button_text} </p>
                </div>
                <div className={styles.detailsRight}>
                    <h3>{pizza.name}</h3>
                    {pizza.avaiableSizes.map((element) => {
                    return (
                        <div key={element.id} className={styles.checkboxstyle}>
                            <input type="checkbox" id={element.id} name={element.name} onChange={(e)=> {SelectedSize(e.target.name, e.target.checked)}} />
                            <label htmlFor={element.id}>{element.name} - {element.price} zł</label>
                        </div>
                    )
                    })}
                </div>
                <img style={{maxWidth:400}} src={pizza.photo} alt={pizza.name}/>
            </div>
        </div>
    )
}

export default PizzaDetails
