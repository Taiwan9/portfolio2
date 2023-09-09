import Area from "../comum/Area";
import vantagem1 from "../../../../../public/tela.png"
import vantagem2 from "../../../../../public/portfolio.png"
import vantagem3 from "../../../../../public/csharp.jpeg"
import Projetos from "./Projetos";
import RedeSocial from "../rodape/RedeSocial";
import { IconBrandGithub, IconBrandWhatsapp, IconWorldWww } from "@tabler/icons-react";



export default function Vantagens(){
    return(
        <Area id="projetos" className="bg-black py-16 sm:py-36">
            <div className="flex flex-col items-center gap-y-16 sm:gap-y-36">
                <Projetos
                    imagem={vantagem1}
                    titulo="Usg Imagem"
                    subtitulo="Sistema de imagem e laudos feito em react e typescript, meu primeiro projeto profissional."
                    url={<RedeSocial icone={<IconWorldWww />} url="https://www.usgimagem.com.br/" />}
                />

                <Projetos
                    imagem={vantagem2}
                    titulo="Portfólio v-1"
                    subtitulo="Primeiro porfólio desenvolvido em React, Sass onde aprendi os conceitos de front-end e suas aplicações."
                    inverter
                    url={<RedeSocial icone={<IconWorldWww />} url="https://taiwanmarinhocl.netlify.app/" />}
                    repo={<RedeSocial icone={<IconBrandGithub />} url="https://github.com/Taiwan9/portfolio" />}
                />
                <Projetos
                    imagem={vantagem3}
                    titulo="API C#"
                    subtitulo="API Rest  feita em C# com Asp.Net Core, Sqlserve, Docker. Um Crud Com autenticação e autorização seguindo a arquitetura de sistema e clean code."
                    repo={<RedeSocial icone={<IconBrandGithub />} url="https://github.com/Taiwan9/IWantApp" />}
                />
            </div>
        </Area>
    )
}