import React from 'react'
import pizzas from './Pizzas'
import styles from './PizzaList.module.css'
import {Link} from 'react-router-dom'

const PizzasList = () => {
    const htmlList = pizzas.map((pizza) => {
        return (
        <Link key={pizza.id} to={`/details/${pizza.id}`} style={{textDecoration: 'none', color: 'black'}}>
        <div className={styles.pizza}>
            <span>Nr.{pizza.id}</span>
            <img src={pizza.photo} alt={pizza.name}/>
            <div className={styles.container}>
                <h3> {pizza.name} </h3>
                {pizza.avaiableSizes.map((element) => {
                    return (
                        <div key={element.id}>
                            <p>
                                {element.name} <br />
                                {element.price} zł
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
        </Link>
        )
    })
    return (
        <div className={styles.pizzas}>
            {htmlList}
        </div>
    )
}

export default PizzasList
