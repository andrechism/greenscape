'use client'

import BusinessCard, { StoreCard } from "../BusinessCard"



type CardGallery = {
    stores: StoreCard[]
}

const CardGallery = ({
    stores
}: CardGallery) => {

    console.log("stores: ", stores)
    return (
        <section className="flex justify-center mt-4">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-screen-2xl w-full">
                {
                    stores.map((card) => (
                        <BusinessCard key={card.title} card={card}/>
                    ))
                }
            </ul>
        </section>
    )
}

export default CardGallery