import Link from "next/link"

const Header = () => {
    return  (
        <header className="h-16 px-4 xl:px-8 flex items-center justify-center border-b text-primary">
            <div className="max-w-screen-2xl w-full flex items-center justify-between">
                <Link href="/">
                    <h1 className="text-xl xl:text-2xl font-bold uppercase">
                        <span className="text-brand">Green</span>
                        <span>Scape</span>
                    </h1>
                </Link>

                <button className="flex items-center uppercase rounded-full px-4 h-10 bg-brand text-white font-medium">
                    Sign In
                </button>
            </div>
        </header>
    )
}

export default Header