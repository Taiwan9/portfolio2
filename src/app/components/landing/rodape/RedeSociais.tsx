import { IconBrandFacebook, IconBrandGithub, IconBrandLinkedin, IconBrandWhatsapp } from "@tabler/icons-react"
import RedeSocial from "./RedeSocial"

export default function RedesSociais() {
    return (
        <div className="flex">
            <RedeSocial icone={<IconBrandWhatsapp />} url="https://web.whatsapp.com/send?phone=55219779342465" />
            <RedeSocial icone={<IconBrandLinkedin />} url="https://www.linkedin.com/in/taiwan-marinho-de-carvalho-313116110/" />
            <RedeSocial icone={<IconBrandGithub />} url="https://github.com/Taiwan9" />
            <RedeSocial icone={<IconBrandFacebook />} url="https://www.facebook.com/taiwan.marinho.7/" />
        </div>
    )
}