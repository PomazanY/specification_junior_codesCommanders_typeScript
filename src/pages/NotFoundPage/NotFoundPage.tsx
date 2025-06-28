import { useNavigate } from "react-router-dom";
import ButtonSignIn from "../../shared/components/ButtonSignIn/ButtonSignIn";

import styles from "./NotFoundPage.module.css"

const NotFoundPage = () => {
    const navigate = useNavigate()
    return (
        <main className={styles.main}>
            <div>
                <h1 className={styles.title}>Page Not Found</h1>
                <p className={styles.text}>We’re sorry, the page you requested could not be found. <br /> Please go back to the homepage.</p>
            </div>
            <div onClick={() => navigate("/")}>
                <ButtonSignIn title="Go Home" />
            </div>

        </main>
    )
}

export default NotFoundPage;