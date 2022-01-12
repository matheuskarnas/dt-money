import { Sumarry } from "../Sumarry";
import {TransactionTable} from "../TrasanctionTable/index";
import { Container } from './style'

export function Dashbord() {
    return (
        <Container>
            <Sumarry/>
            <TransactionTable/>
        </Container>
    )
} 