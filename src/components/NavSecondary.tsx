import { Link } from "@tanstack/react-router";

Link

const NavSecondary = () => {
    return (
        <nav id="nav-secondary">
            <ul>
                <li>
                    <Link to="/game/$sceneId" params={{ sceneId: "history" }}>History</Link>
                </li>
                <li>
                    <Link to="/game/$sceneId" params={{ sceneId: "settings" }}>Audio</Link>
                </li>
                <li>
                    <Link to="/game/$sceneId" params={{ sceneId: "info" }}>Info</Link>
                </li>
            </ul>
        </nav>
    );
}


export default NavSecondary;