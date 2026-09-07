import { NavLink } from "react-router";
import { Text } from "../components/text"
import Container from "../components/container";


export function Footer(){
    return (
        <Container as="footer" className="my-5 md:my-10">
            <nav className="flex justify-center gap-2">
                <NavLink to="/">
                    <Text variant="body-sm-bold" className="text-gray-300">Tarefas</Text>
                </NavLink>

                <NavLink to="componentes">
                     <Text variant="body-sm-bold" className="text-gray-300">Componentes</Text>
                </NavLink>
            </nav>
        </Container>
    )
}