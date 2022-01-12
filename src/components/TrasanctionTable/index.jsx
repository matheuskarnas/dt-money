import {Container} from './style'

export function TransactionTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>title</th>
                        <th>price</th>
                        <th>category</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de site</td>
                        <td className="deposit">R$ 12.000,00</td>
                        <td>Venda</td>
                        <td>13/04/2021</td>
                    </tr>

                    <tr>
                        <td>Hamburguer</td>
                        <td>- R$ 59,00</td>
                        <td>Alimentação</td>
                        <td>10/04/2021</td>
                    </tr>

                    <tr>
                        <td>Aluguel do apartamento</td>
                        <td>R$ 12.000,00</td>
                        <td>Venda</td>
                        <td>13/04/2021</td>
                    </tr>

                    <tr>
                        <td>Aluguel do apartamento</td>
                        <td className="withdraw">- R$ 1.200,00</td>
                        <td>Casa</td>
                        <td>27/03/2021</td>
                    </tr>

                    <tr>
                        <td>Computador</td>
                        <td>R$ 5.400,00</td>
                        <td>Venda</td>
                        <td>15/03/2021</td>
                    </tr>
                </tbody>
            </table>

        </Container>
    )
}