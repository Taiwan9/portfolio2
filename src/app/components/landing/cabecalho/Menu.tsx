import { IconBrandGoogle, IconBrandWhatsapp } from "@tabler/icons-react";
import MenuItem from "./MenuItem";
import {useContext} from "react"
import Link from "next/link";


export default function Menu(){


    return(
        <div className="flex gap-2">
            <MenuItem url="#inicio" className="hidden sm:flex">Início</MenuItem>
            <MenuItem url="#projetos" className="hidden sm:flex">Projetos</MenuItem>
            <MenuItem url="#depoimentos" className="hidden sm:flex">Depoimentos</MenuItem>
            
            <MenuItem  className="bg-gradient-to-r from-indigo-600 to-cyan-600">
                <Link className="flex items-center gap-2" href={"https://web.whatsapp.com/send?phone=55219779342465"} target="_blank">
                    <IconBrandWhatsapp size={15}/>
                    <span>Contato</span>
                </Link>
            </MenuItem>
        </div>
    )
}