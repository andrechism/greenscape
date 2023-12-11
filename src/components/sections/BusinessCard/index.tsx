'use client'

import { useModal } from "@/components/contexts/ModalContext"
import Image from "next/image"
import { useCallback } from "react"

type Review = {
    name: string
    comment: string
    review: number
}

export type StoreCard = {
    title: string
    subtitle: string
    description: string
    file: string
    reviews: Review[]
}

type BusinessCardProps = {
    card: StoreCard
}

const BusinessCard = ({
    card
}: BusinessCardProps) => {

    const {
        openModal
    } = useModal()

    const handleClick = useCallback(() => {
        openModal(card)
    }, [card, openModal])

    return (
        <li className="flex justify-center w-full">
            <button onClick={handleClick} className="flex flex-col w-11/12 rounded-xl overflow-hidden border mb-4">
                <Image className="w-full h-[250px] object-cover" src={card.file} width={350} height={250} alt={card.title}/>
                <div className="flex flex-col items-start text-start p-4 text-primary">
                    <h3 className="text-lg font-black">{card.title}</h3>
                    <p className="font-semibold">{card.subtitle}</p>
                    <p className="text-sm mt-2">{card.description}</p>
                </div>
            </button>
        </li>
    )
}

export default BusinessCard