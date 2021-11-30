import { Container } from "./styles";
import iconeImg from '../../assets/outcome.svg';
import outcomeImg from '../../assets/total.svg';
import saidasImg from '../../assets/saidas.svg';


export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src = {iconeImg} alt = "Entradas" />
                </header>
                <strong>$1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src = {saidasImg} alt = "Saidas" />
                </header>
                <strong> - $500,00</strong>
            </div>

            <div className= "highlight-background">
                <header>
                    <p>Totais</p>
                    <img src = {outcomeImg} alt = "Totais" />
                </header>
                <strong>$500,00</strong>
            </div>
        </Container>    
        
    )
}