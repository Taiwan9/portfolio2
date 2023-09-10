import React from "react"
import ImagemResponsiva from "../comum/ImagemResponsiva"
import RedeSocial from "../rodape/RedeSocial"
import { IconBrandWhatsapp } from "@tabler/icons-react"

export interface ProjetosProps {
    imagem: any
    titulo: string
    subtitulo: string
    inverter?: boolean
    url?: any
    repo?:any
}

export default function Projetos(props: ProjetosProps) {
    return (
        <div className={`
            flex flex-col justify-around items-center w-full gap-6
            ${props.inverter ? 'sm:flex-row-reverse' : 'sm:flex-row'}
        `}>
            <ImagemResponsiva
                imagem={props.imagem}
                className={props.inverter ? 'sm:rotate-6' : 'sm:-rotate-6'}
            />
            <div className={`
                flex flex-col gap-y-6 sm:w-[350px]
                text-center sm:text-left
            `}>
                <div className={`
                    flex flex-col text-white
                    font-black text-2xl sm:text-4xl
                `}>{props.titulo}</div>
                <span className="font-light text-base sm:text-lg text-zinc-500">
                    {props.subtitulo}
                </span>
                <div className=" flex font-thin text-zinc-400 text-center sm:text-left justify-center items-center space-x-4">
                    {props.url}
                    {props.repo}
                </div>             
            </div>
        </div>
    )
}