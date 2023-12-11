import Image from "next/image"

type BannerProps = {
    image: {
        desktopSrc: string
        mobileSrc: string
        alt: string
    }
}

const Banner = ({
    image
}: BannerProps) => {
    return  (
        <section className="flex justify-center w-full pb-4">
            <div className="flex justify-center w-full max-w-screen-2xl">
                <picture>
                    <source media="(max-width: 1279px)" srcSet={image.mobileSrc} />
                    <source media="(min-width: 1280px)" srcSet={image.desktopSrc} />
                    <Image className="w-full" src={image.desktopSrc} alt={image.alt} width={1000} height={200} />
                </picture>
            </div>
        </section>
    )
}

export default Banner