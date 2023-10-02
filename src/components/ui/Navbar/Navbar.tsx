import Logo from "../../../assets/logo.svg" ;
import Cart from "../../../assets/carrito.svg" ;
import styles from "./Navbar.module.css" ;

const Navbar = () => {
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
            <img src= { Cart } alt = "Cart" width={60} height={60} />
        </div>
    </div>
  )
}

export default Navbar