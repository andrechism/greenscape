import Image from "next/image"
import Link from "next/link"

type HeroProps = {
    inverse?: boolean
    image: {
        src: string
        alt: string
    }
    content: {
        title: string
        subTitle: string
        description: string
        button: {
            href: string
            text: string
        }
    }
}

const Hero = ({
    inverse,
    image,
    content
}: HeroProps) => {
    return (
        <section className="flex justify-center pb-4">
            <div className="flex max-w-screen-2xl w-full flex-col xl:flex-row justify-between ">
                <Image className={`w-full xl:w-[767px] ${inverse ? 'xl:order-1' : ''}`} src={image.src} alt={image.alt} width={767} height={438} />
                <div className="flex flex-col justify-center text-primary py-16 xl:py-0 px-4">
                    <h2 className="font-bold text-4xl text-center w-fit mx-auto relative after:absolute after:-z-10 after:left-0 after:right-0 after:-bottom-2 after:w-full after:h-1 after:bg-brand">
                        {content.title}
                    </h2>
                    <p className="mt-8 text-2xl font-semibold text-center">{content.subTitle}</p>
                    <p className="mt-8 text-2xl font-medium text-center max-w-[80%] mx-auto">{content.description}</p>
                    <Link href={content.button.href} className="mt-8 rounded-full h-14 px-8 border border-brand bg-white flex items-center mx-auto text-primary uppercase text-2xl font-semibold hover:bg-brand hover:text-white transition">{content.button.text}</Link>
                </div>
            </div>
        </section>
    )
}

export default Hero