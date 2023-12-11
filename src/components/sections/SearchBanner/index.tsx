import Icon from "@/components/ui/Icon"
import Image from "next/image"
import { redirect } from "next/navigation"

type SearchBannerProps = {
    search?: string
}

const SearchBanner = ({
    search
}: SearchBannerProps) => {

    const searchAction = async (formData: FormData) => {
        'use server'
        const searchValue = formData.get("search")
        redirect(`/explore?search=${searchValue}`)
    }

    return (
        <section className="flex justify-center w-full h-[326px]">
            <div className="flex w-full max-w-screen-2xl relative">
                <div className="absolute top-0 bottom-0 w-full px-4 xl:px-8 flex flex-col lg:flex-row lg:items-center justify-between text-white">
                    <div className="flex flex-col justify-end h-full">
                        <h2 className="text-6xl font-bold mb-8 pt-8 lg:pt-0">Explore</h2>
                        <div className={`${search ? 'bg-white' : ''} w-fit lg:w-auto lg:max-w-md rounded-full h-16 text-primary flex items-center px-8 mx-auto lg:mx-0 mb-11 lg:mb-16 text-2xl capitalize relative after:w-full after:lg:w-1/2 after:h-1 after:bg-white after:absolute after:left-0 after:lg:left-2 after:-bottom-6 after:rounded-full`}>
                            <span className="text-ellipsis overflow-hidden line-clamp-1">{search}</span>
                        </div>
                    </div>
                    <form action={searchAction} className="relative w-full lg:w-1/2 self-center lg:self-end mb-16 text-primary">
                        <input className="rounded-full pl-8 pr-12 h-16 w-full" type="text" placeholder="Search" name="search" />
                        <button className="absolute right-5 top-0 bottom-0" type="submit">
                            <Icon name="icon-search" />
                        </button>
                    </form>
                </div>
                <Image className="w-full object-cover" src="/assets/explore-banner.png" width={1536} height={326} alt="explore banner" />
            </div>
        </section>
    )
}

export default SearchBanner