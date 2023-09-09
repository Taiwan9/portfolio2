import Area from "../comum/Area";
import Depoimento from "./Depoimento";
import marcosDev from '../../../../../public/marcosDev.jpeg'

export default function Depoimentos(){
    const marcosDev ='/marcosDev.jpeg'
    return(
        <Area id="depoimentos" className={`
        bg-gradient-to-r from-black via-zinc-900 to-black
        py-10 sm:py-20
    `}>
        <div className={`flex flex-col justify-center items-center`}>
            <h2 className="font-thin text-zinc-600 text-2xl sm:text-4xl mb-11 text-center">
                As pessoas estão dizendo...
            </h2>
            <div className="flex justify-center xl:justify-between items-center justify-items-center gap-7 w-full flex-wrap">
                <Depoimento
                    avatar="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2376&q=80"
                    nome="Gabriel Junior"
                    titulo="Desenvolvedor de Software"
                    texto="Ótimo profissional, prático e objetivo. Tem mente criativa e rápida resolução de problemas."
                />
                <Depoimento
                    avatar="https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                    nome="Juliana Moraes"
                    titulo="Design UX/UI"
                    texto="profissional ideal para tirar seu projeto do papel. Trabalhamos em um projeto para um cliente, e sempre buscou qualidade e pontualidade na entrega do serviço."
                    destaque
                />
                <Depoimento
                    avatar="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2334&q=80"
                    nome="Maria Eduarda"
                    titulo="Desenvolvedora Backend"
                    texto="Trabalhamos juntos em diversos projetos pessoais e profissionais. Desde que ele entrou no meu grupo do Projetos Práticos teve excelentes idéias e se dedicou muito nos projetos que participou."
                />
            </div>
        </div>
    </Area>
    )
}