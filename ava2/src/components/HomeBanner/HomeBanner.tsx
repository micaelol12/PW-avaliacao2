import styles from './HomeBanner.module.css';

const HomeBanner = () => {
    return <div className={styles.container}>
        <h1 className={styles.welcome}>
            Bem vindo de volta! Sentimos sua falta
        </h1>
        <img src="/astronaut.png" alt="astronauta" className={styles.img} />
    </div>
}

export default HomeBanner