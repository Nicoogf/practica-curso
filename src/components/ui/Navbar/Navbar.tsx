import Logo from "../../../assets/logo.svg" ;
import Cart from "../../../assets/carrito.svg" ;
import styles from "./Navbar.module.css" ;
import { useState } from "react";
import CardModal from "../CardModal/CardModal";

const Navbar = () => {

  const [ showCartModal , setShodCartModal ] = useState( false ) ;

  const handleShowCartModal= () =>{
    setShodCartModal( !showCartModal )
  }
  return (
    <div className={ styles.navbarContainer }>

        <div className={ styles.navbarDetail }>
            <img src={ Logo } alt="Logo de Ecomerce" width={60} height={60}/>
            <div>
                <span> DH Ecomerce</span>
            </div>
        </div>

        <div className={ styles.navbarCartContainer }>
            <p className={ styles.navbarTextAmount }> 2 </p>
            <img src= { Cart } alt = "Cart" width={60} height={60} onClick={ handleShowCartModal }/>
        </div>

        { showCartModal && <CardModal handleShowCartModal={ handleShowCartModal }/>}
    </div>
  )
}

export default Navbar