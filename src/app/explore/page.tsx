import { ModalProvider } from "@/components/contexts/ModalContext"
import DefaultLayout from "@/components/layouts/DefaultLayout"
import CardGallery from "@/components/sections/CardGallery"
import SearchBanner from "@/components/sections/SearchBanner"
import { storesMock } from "@/mocks/stores"

type ExplorePageParams = {
    searchParams: {
        search?: string
    }
}

const ExplorePage = async ({
    searchParams
}: ExplorePageParams) => {

    const filteredStores = storesMock.filter((store) => store.title.toLowerCase().includes(searchParams.search?.toLowerCase()?.trim() ?? ''))

    return (
        <ModalProvider>
            <DefaultLayout>
                <SearchBanner search={searchParams.search} />
                <CardGallery stores={filteredStores} />
            </DefaultLayout>
        </ModalProvider>
    )
}

export default ExplorePage