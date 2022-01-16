import { RiSearch2Line } from 'react-icons/ri'
import { Container, LinkActive, Logo, ContainerSearch } from './styles'

export function Header() {
    return (
        <Container>
            <Logo>Hekto</Logo>

            <ul>
                <LinkActive>
                    <a>Home</a>
                </LinkActive>

                <li>
                    <a>Paginas</a>
                </li>

                <li>
                    <a>Produtos</a>
                </li>

                <li>
                    <a>Blog</a>
                </li>

                <li>
                    <a>Shop</a>
                </li>

                <li>
                    <a>Contato</a>
                </li>
            </ul>

            <ContainerSearch>
                <input type="text" />
                <button><RiSearch2Line size={20} color='#fff' /></button>
            </ContainerSearch>
        </Container>
    )
}