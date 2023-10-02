import style from "./CardProduct.module.css" ;

const CardProduct = ( { product }) => {
  return (
    <div className={ style.cardContainer }>
      <img src={ product.image}  alt={ product.name} className={ style.cardImage }/>
      <div className={ style.cardDetail }>
        <h3 className={ style.cardTitle }> { product.name} </h3>
        <div className={ style.cardBody } >
          <p className={ style.cardType }> { product.type} </p>
          <p className={ style.cardPrice }> $ { product.price} ,  <small> 00 </small> </p>
        </div>
        <button className={ style.cardButton }> Agregar Al carro</button>
      </div>
    </div>
  )
}

export default CardProduct