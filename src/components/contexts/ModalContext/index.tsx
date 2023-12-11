'use client'
import { StoreCard } from "@/components/sections/BusinessCard"
import CardModal from "@/components/sections/CardModal"
import { ReactNode, createContext, useCallback, useContext, useMemo, useState } from "react"

type ModalProviderProps = {
    children: ReactNode
}

type ModalContextData = {
    openModal: (card: StoreCard) => void
    closeModal: () => void
}

const ModalContext = createContext({} as ModalContextData)

const ModalProvider = ({
    children,
}: ModalProviderProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedCard, setSelectedCard] = useState<StoreCard | null>(null)

    const openModal = useCallback((card: StoreCard) => {
        setSelectedCard(card)
        setIsOpen(true)
    }, [setSelectedCard, setIsOpen])

    const closeModal = useCallback(() => {
        setSelectedCard(null)
        setIsOpen(false)
    }, [setSelectedCard, setIsOpen])

    const value: ModalContextData = useMemo(() => {
        return{
            closeModal,
            openModal
        }
    }, [closeModal, openModal])

    return (
        <ModalContext.Provider value={value}>
            {children}
            {isOpen && selectedCard && <CardModal card={selectedCard} />}
        </ModalContext.Provider>
    )
}

const useModal = () => {
    return useContext(ModalContext)
}

export {
    ModalProvider,
    useModal
}