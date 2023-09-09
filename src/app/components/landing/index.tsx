import Cabecalho from "./cabecalho";
import Depoimentos from "./depoimentos";
import Destaque from "./destaque";
import Rodape from "./rodape";
import Vantagens from "./vantagens";

export default function Landing(){
    return(
        <>
            <Cabecalho></Cabecalho>
            <Destaque></Destaque>
            <Vantagens></Vantagens>
            <Depoimentos></Depoimentos>
            <Rodape></Rodape>
        </>
    )
}