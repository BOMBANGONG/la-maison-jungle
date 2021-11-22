import { useParams, useHistory } from 'react-router-dom'
import Button from './Button'
import '../styles/Description.css'
import { func } from 'prop-types'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { PlantListContext } from '../context/PlantListContext'
import React from 'react'

const Description: React.FC = () => {
  const { updateCart } = useContext(CartContext)
  const { plants } = useContext(PlantListContext)

  const history = useHistory()
  const { id } = useParams<{ id: string }>()
  const plantData = plants.find((e: { id: any }) => e.id === id)
  if (!plantData) {
    history.push('/shop')
    return null
  }

  const { cover, name, price, description } = plantData

  return (
    <div>
      <div className="container">
        <div className="img-src">
          <img src={cover} alt={`${name} cover`} />
        </div>

        <div className="text-src">
          <h2>{name}</h2>
          <p>{description}</p>
          <p>{price}€</p>
          <Button
            id=""
            primary
            label={'Add'}
            onClick={() => updateCart(name, price)}
          />
          <Button id="" label={'Back'} onClick={() => history.push('/shop')} />
        </div>
      </div>
    </div>
  )
}

Description.propTypes = {
  setCart: func,
}

export default Description
