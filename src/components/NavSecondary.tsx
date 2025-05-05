import { Link } from "@tanstack/react-router";
import styles from "./Navs.module.css";


const NavSecondary = () => {
    return (
        <nav id="nav-secondary" className={`${styles.NavSecondary} bodymedium`}>
            <ul>
                <li>
                    <Link className="f-w-600" to="/game/$sceneId" params={{ sceneId: "history" }}>History</Link>
                </li>
                <li>
                    <Link className="f-w-600" to="/game/$sceneId" params={{ sceneId: "settings" }}>Audio</Link>
                </li>
                <li>
                    <Link className="f-w-600" to="/game/$sceneId" params={{ sceneId: "info" }}>Info</Link>
                </li>
            </ul>
        </nav>
    );
}


export default NavSecondary;