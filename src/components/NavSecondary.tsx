import { Link } from "@tanstack/react-router";
import styles from "./Navs.module.css";


const NavSecondary = () => {
    const links = [
        { to: "/game/$sceneId", params: { sceneId: "history" } },
        { to: "/game/$sceneId", params: { sceneId: "settings" } },
        { to: "/game/$sceneId", params: { sceneId: "info" } },
    ]
    return (
        <nav id="nav-secondary" className={`${styles.NavSecondary} bodymedium`}>
            <ul>
                {links.map((l, i) => (
                    <Link
                        key={i}
                        to={l.to}
                        params={l.params}
                        activeProps={{
                            style: {
                                color: 'yellow',
                            },
                        }}>
                        {l.params.sceneId}
                    </Link>
                ))}

            </ul>
        </nav>
    );
}


export default NavSecondary;