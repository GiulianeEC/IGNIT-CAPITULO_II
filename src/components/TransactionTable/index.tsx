import {Container} from "./styles";
import {useEffect} from "react";
import {api} from "../../services/api";

export function TransactionTable(){
    
    useEffect(() => {
        api.get('/transactions')
            .then(response=>console.log(response.data))
    },  []);

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>                  
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de WebSite</td>
                        <td className= "deposit">R$12000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/12/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className= "withdraw"> - R$1000,00</td>
                        <td>Casa</td>
                        <td>10/12/2021</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de WebSite</td>
                        <td>R$12000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/12/2021</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de WebSite</td>
                        <td>R$12000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/12/2021</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de WebSite</td>
                        <td>R$12000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/12/2021</td>
                    </tr>
                </tbody>
                
            </table>
        </Container>
    );
}