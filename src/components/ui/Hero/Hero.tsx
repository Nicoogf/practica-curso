import styles from "./Hero.module.css" ;

const Hero = () => {
  return (
    <div  className={styles.heroContainer}>
        <div className={styles.heroTitleContainer}>
            <h1>
                Super Flash Sale <span> 50% Off</span>
            </h1>
        </div>
    </div>
  )
}

export default Hero ;