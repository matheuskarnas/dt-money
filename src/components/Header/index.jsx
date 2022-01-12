import logoImg from '../../assets/logo.svg'
import { Container } from './style'



export function Header({onOpenNewTransactionModal}) {

    return (
        <Container>
            <div>
                <img src={logoImg} alt="home" />
                <button 
                    onClick={onOpenNewTransactionModal} 
                >Nova transação</button>
            </div> 
        </Container>
    )
}