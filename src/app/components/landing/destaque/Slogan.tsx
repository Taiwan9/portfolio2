import { IconArrowRight, IconBrandAngular, IconBrandPhp, IconBrandGithub, IconBrandLinkedin, IconBrandReact, IconBrandWhatsapp, IconCertificate, IconSql, IconVideo } from "@tabler/icons-react"
import Link from "next/link"

export default function Slogan(){
    function renderizarFrase() {
        return (
            <div
                className={`
                    flex flex-col items-center md:items-start text-4xl lg:text-6xl
                    text-white font-light
                `}
            >
                <div className="flex gap-2.5">
                    <div className={`relative`}>
                        <span
                            className={`
                            absolute bottom-1 left-0 w-full
                            border-b-8 border-purple-500
                            -rotate-2
                        `}
                        ></span>
                        <span className="relative">Bem vindo</span>
                    </div>
                    <div>,sou</div>
                </div>
                <div className="flex gap-2.5">
                    <span>Taiwan</span>
                    <span>Marinho</span>
                </div>
                <div className="flex gap-2.5">
                    <span>Dev</span>
                    <span
                        className={`
                        flex items-center p-1
                        relative text-black
                    `}
                    >
                        <span className="absolute -rotate-1 top-0.5 left-0 w-full h-5/6 bg-yellow-300 rounded-sm" />
                        <span className="relative rotate-2 z-20">FullStack</span>
                    </span>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col justify-center gap-5">
            {renderizarFrase()}
            <div className=" flex font-thin text-zinc-400 text-center sm:text-left justify-center items-center space-x-4">
                <IconBrandReact/>
                <IconBrandAngular/>
                <IconBrandPhp/>
                <IconBrandGithub/>
                <IconSql/>
            </div>
            <div className="flex justify-center sm:justify-start items-center gap-4">
                <div
                    className={`
                        flex items-center gap-6 cursor-pointer
                        bg-gradient-to-r from-indigo-600 to-cyan-600
                        text-white px-5 py-2.5 rounded-md
                    `}
    
                >   
                    <Link className="flex items-center gap-6" href={"https://www.linkedin.com/in/taiwan-marinho-de-carvalho-313116110/"} target="_blank">
                    <span className="font-thin md:text-lg text-base">
                        LinkedIn
                    </span>
                    <IconBrandLinkedin className="hidden lg:inline" stroke={1} />
                    </Link>
                </div>
                <Link href={'https://drive.google.com/file/d/1rSMpv1x0l7mikpMnR3mn5iAPsQCSXbAV/view?usp=sharing'}
                    className={`
                    flex items-center gap-2 cursor-pointer
                    text-zinc-300 px-5 py-2.5
                `}
                target="_blank"
                >
                    <IconCertificate stroke={1} />
                    <span className="font-thin md:text-lg text-base">
                        <span className="hidden sm:inline">Download</span> Currículo
                    </span>
                </Link>
            </div>
        </div>
        
    )
}