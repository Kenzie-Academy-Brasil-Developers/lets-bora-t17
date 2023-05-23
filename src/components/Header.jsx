import Title from "./Title"
import { user } from '../data/user'

function Header() {
    return(
        <header>
            <img src="" alt="Perfil" />
            {user.name}

            <ul>
                <li>
                    <a href="">Home</a>
                    <a href="">Sobre</a>
                    <a href="">Tecnoligas</a>
                </li>
            </ul>

            <Title text={user.name}/>
        </header>
    )
}

export default Header

// function sum(num1, num2) {
//     return num1 + num2
// }

// sum(2, 3) // 5
// sum(3, 3) // 6

// Header()
{/* <Header /> */}