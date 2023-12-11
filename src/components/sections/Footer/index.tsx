import Icon from "@/components/ui/Icon"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="flex flex-col items-center px-8 bg-green-950 text-white">
            <div className="max-w-screen-2xl w-full flex justify-between pt-16 xl:pt-4 flex-col xl:flex-row">
                <section className="max-w-lg">
                    <div className="flex flex-col">
                        <span className="text-2xl font-semibold">About our</span>
                        <span className="text-4xl uppercase font-bold">GreenScape</span>
                    </div>
                    <p className="mt-4 text-sm">At GreenScape, we believe in nurturing a harmony between commerce and conservation. We&apos;re committed to connecting consumers with local businesses that share a dedication to sustainability. Our platform is more than a directory; it&apos;s a community-driven space that fosters support for green initiatives, encourages eco-friendly practices, and cultivates a marketplace where every purchase contributes to a healthier planet. Join us in our mission to make sustainability the standard, one choice at a time.</p>
                </section>
                <div className="h-[1px] xl:h-[200px] w-full xl:w-[1px] my-16 xl:my-auto bg-white flex justify-center" />
                <section className="flex flex-col">
                    <div className="text-center flex flex-col">
                        <span className="text-xl">Subscribe to our</span>
                        <span className="text-2xl uppercase font-semibold">Newsletter</span>
                    </div>
                    <form className="flex flex-col text-primary">
                        <input className="mt-4 rounded-lg px-2 h-10" type="text" placeholder="Your name" />
                        <input className="mt-4 rounded-lg px-2 h-10" type="email" placeholder="jessica@example.com" />
                        <button className="flex items-center mx-auto mt-4 h-10 px-8 bg-white rounded-full" type="submit">Subscribe</button>
                    </form>
                </section>
                <div className="h-[1px] xl:h-[200px] w-full xl:w-[1px] my-16 xl:my-auto bg-white flex justify-center" />
                <section>
                    <div className="text-center flex flex-col">
                        <span className="text-xl">Follow us on our</span>
                        <span className="text-2xl uppercase font-semibold">Social Networks</span>
                    </div>
                    <div className="flex flex-col w-fit mx-auto pt-4">
                        <a className="flex items-center" href="#">
                            <Icon name="icon-facebook" width={40} height={40} />
                            <span>@greenscape</span>
                        </a>
                        <a className="flex items-center" href="#">
                            <Icon name="icon-instagram" width={40} height={40} />
                            <span>@greenscape</span>
                        </a>
                        <a className="flex items-center" href="#">
                            <Icon name="icon-tiktok" width={40} height={40} />
                            <span>@greenscape</span>
                        </a>
                    </div>
                </section>
                <div className="h-[1px] xl:h-[200px] w-full xl:w-[1px] my-16 xl:my-auto bg-white flex justify-center" />
                <section>
                    <span className="flex w-full justify-center font-bold">Powered by:</span>
                    <Link href="#" className="flex flex-col items-center mt-4">
                        <Image src="/assets/icon-leafs.png" width={120} height={120} alt="EcoTech Solutions" />
                        <span className="mt-2 font-bold text-xl">EcoTech Solutions</span>
                    </Link>
                </section>
            </div>
            <div className="w-full flex h-[1px] bg-white mt-16 xl:mt-4" />
            <div className="max-w-screen-2xl w-full flex justify-center py-4 text-center">
                <p>© 2023 GreenScape by EcoTech Solutions. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer