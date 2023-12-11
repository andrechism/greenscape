'use client'

import { useModal } from "@/components/contexts/ModalContext"
import { StoreCard } from "../BusinessCard"
import Image from "next/image"
import Icon from "@/components/ui/Icon"
import { RatingStars } from "@/components/ui/RatingStars"

type CardModalProps = {
    card: StoreCard
}

const CardModal = ({
    card
}: CardModalProps) => {
    const { closeModal } = useModal()
    return (
        <>
            <div onClick={closeModal} role="presentation" className="fixed top-0 bottom-0 left-0 right-0 bg-black opacity-40"></div>
            <section className="fixed top-0 bottom-0 left-0 right-0 w-fit lg:w-5/6 xl:w-2/3 overflow-auto max-h-[80vh] max-w-[95%] lg:max-w-5xl h-fit lg:h-[500px] flex flex-col lg:flex-row rounded-2xl p-8 m-auto bg-white">
                <Image className="aspect-square object-cover max-h-[50vh] w-full lg:w-96 xl:w-auto mt-6 lg:mt-0" src={card.file} alt={card.title} width={500} height={500}/>
                <div className="mt-6 lg:mt-0 lg:pl-8 text-primary">
                    <h3 className="text-xl font-black">{card.title}</h3>
                    <p className="text-lg font-semibold">{card.subtitle}</p>
                    <p className="text-sm mt-4">{card.description}</p>

                    <h4 className="mt-8 font-bold">Reviews: </h4>
                    <ul className="overflow-auto h-[60%] scroll">
                        {card.reviews.map((review) => (
                            <li key={review.name} className="border-l-4 mt-4">
                                <RatingStars stars={review.review} />
                                <p className="ml-4 text-xl">{review.name}</p>
                                <p className="ml-7">{review.comment}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <button className="absolute top-2 right-2" onClick={closeModal}>
                    <Icon name="icon-close" width={40} height={40} />
                </button>
            </section>
        </>
    )
}

export default CardModal