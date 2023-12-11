import Footer from "@/components/sections/Footer"
import Header from "@/components/sections/Header"
import { ReactNode } from "react"

type DefaultLayoutProps = {
    children: ReactNode
}

const DefaultLayout = ({
    children
}: DefaultLayoutProps) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default DefaultLayout