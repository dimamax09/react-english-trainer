'use client'

import { Button } from '@mui/material'
import LearningText from '@/app/ components/learning/learning-text'
import { getText } from '@/app/services/genTextService'
import { useState } from 'react'

export default function Home() {
    const [text, setText] = useState('')

    const generateText = () => {
        setText(getText())
    }

    return (
        <main>
            <Button onClick={generateText} variant="contained">
                Сгенерировать текст
            </Button>
            <LearningText text={text} />
        </main>
    )
}
