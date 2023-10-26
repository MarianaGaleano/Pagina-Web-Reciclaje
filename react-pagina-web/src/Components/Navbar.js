import React from 'react'
import { Link } from 'react-scroll';

const Navbar = () => {
    const links = [
        {
            id: 1,
            link: "Inicio",
        },
        {
            id: 2,
            link: "HowWeWork",
        },
        {
            id: 3,
            link: "Servicios",
        },
        {
            id: 4,
            link: "Comunicados",
        },
        {
            id: 5,
            link: "Escribenos",
        },

    ]

    return (
        <div>
            <p>Asordam</p>
            <ul>
                {links.map(x => (
                    <div>
                        <Link>{x.link === "HowWeWork" ? "Quiénes Somos?" : x.link}</Link>
                    </div>

                ))}
            </ul>
        </div>
    );

};

export default Navbar