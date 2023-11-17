import { db } from "./init";

import { collection, doc, getDocs, setDoc } from "firebase/firestore"; 
import { type Card } from "../utils/types";

const cardsRef = collection(db, "cards");

export async function createNewCard (card: Card){
    try {
        const cardRef = doc(cardsRef)
        await setDoc(cardRef, card)
        return cardRef
    } catch (error) {
        console.log(`Error: ${error}`)
        return false
    }
}

export async function listAllCards (){
    const cards: Card[] = []
    try {
        const response = await getDocs(cardsRef)
        response.forEach(doc => {
            cards.push(doc.data() as Card)
        })
    } catch (error) {
        console.log(`Error: ${error}`)
    }

    return cards
}