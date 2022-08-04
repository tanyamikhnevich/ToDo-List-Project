import {NavLink} from "react-router-dom";

export const NotFoundPage = () => {
    return (
        <div>404 not found. Go
            <NavLink to={'/'}> home</NavLink>
        </div>
    )
}