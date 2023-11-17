import React, { useEffect, useState } from 'react'
import { listAllCards } from '../firebase/cards'
import { Card } from '../utils/types'

export default function ListAllCards() {

    const [cards, setcards] = useState<Card[]>([])

    useEffect(() => {
        async function callList() {
            const newCards = await listAllCards()
            setcards(newCards)
        }
        callList()
    }, [])

    return (
        <div>ListAllCards

            {cards.map(card => {
                return (
                    <article>
                        <h2>{card.title}</h2>
                        {card.img}
                        {card.introduction}
                        {card.fullStory}
                    </article>
                )
            })}

        </div>
    )
}
