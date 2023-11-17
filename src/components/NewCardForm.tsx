import React, { useState } from 'react'
import { createNewCard } from '../firebase/cards'

export default function NewCardForm() {

    const [title, settitle] = useState('')
    const [introduction, setintroduction] = useState('')
    const [fullStory, setfullStory] = useState('')
    const [img, setimg] = useState('')

    function clearForm() {
        settitle('')
        setintroduction('')
        setfullStory('')
        setimg('')
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        await createNewCard({
            title,
            introduction,
            fullStory,
            img,
            rating: 0,
            nRating: 0,
        })
        clearForm()
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create card</h2>
            <label htmlFor="title">Title</label>
            <input value={title} onChange={e => settitle(e.target.value)} type="text" id="title" />

            <label htmlFor="introduction">introduction</label>
            <input value={introduction} onChange={e => setintroduction(e.target.value)} type="text" id="introduction" />

            <label htmlFor="fullStory">fullStory</label>
            <input value={fullStory} onChange={e => setfullStory(e.target.value)} type="text" id="fullStory" />

            <label htmlFor="img">Img url</label>
            <input value={img} onChange={e => setimg(e.target.value)} type="text" id="img" />

            <button type='submit'>criar</button>

        </form>
    )
}
