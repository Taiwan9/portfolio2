import React from "react"
import Link from "next/link"

interface RedeSocialProps {
    icone: any
    url: string
    text?:string
}

export default function RedeSocial2(props: RedeSocialProps) {
    return (
        <Link href={props.url} target="_blank">
            <div className="bg-zinc-800 rounded-lg px-10 mr-3 cursor-pointer">
                {React.cloneElement(props.icone, {
                    size: 35,
                    strokeWidth: 1,
                    className: "text-indigo-400",
                })}
                <h3 className="text-center">{props.text}</h3>
            </div>
        </Link>
    )
}