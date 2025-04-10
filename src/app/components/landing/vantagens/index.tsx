import Area from "../comum/Area";
import vantagem1 from "../../../../../public/imgJava.png"
import vantagem2 from "../../../../../public/portfolio.png"
import vantagem3 from "../../../../../public/imagemJogoMestre.png"
import Projetos from "./Projetos";
import { IconBrandGithub, IconWorldWww } from "@tabler/icons-react";
import RedeSocial2 from "./RedeSocial2";



export default function Vantagens(){
    return(
        <Area id="projetos" className="bg-black py-16 sm:py-36">
            <div className="flex flex-col items-center gap-y-16 sm:gap-y-36">
                <Projetos
                    imagem={vantagem1}
                    titulo="Rasfood"
                    subtitulo="Projeto JPA Hibernate para registro de itens do cardapio e histórico de pedidos."
                    repo={<RedeSocial2 icone={<IconBrandGithub />} url="https://github.com/Taiwan9/rasfood/tree/main/rasfood"  text="repo"/>}
                />
                <Projetos
                    imagem={vantagem3}
                    titulo="Jogo Mestre"
                    subtitulo="Projeto em Angular com Ionic e Supabase. Um App onde Jogadores montam times e jogam entre si."
                    inverter
                    url={<RedeSocial2 icone={<IconWorldWww />} url="https://app.jogodemestre.com/"  text="site"/>}
                />
                <Projetos
                    imagem={vantagem1}
                    titulo="Painel de Controle"
                    subtitulo="Projeto Web com Java, JSP, Servlet, HTML, CSS e JavaScript. Um painel de controle para gerenciar produtos e usuários."
                    repo={<RedeSocial2 icone={<IconBrandGithub />} url="https://github.com/Taiwan9/-Taiwan9-ProjetoWebJSP/tree/master"  text="repo"/>}
                />
                <Projetos
                    imagem={vantagem1}
                    titulo="Desafio Athenas"
                    subtitulo="Desafio de Java Jsf com Primefaces, JPA e Hibernate. Um sistema de cadastro de usuários e IMC."
                    inverter 
                    repo={<RedeSocial2 icone={<IconBrandGithub />} url="https://github.com/Taiwan9/athenasRecuit"  text="repo"/>}
                />
            </div>
        </Area>
    )
}