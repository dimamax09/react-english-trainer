import { Card } from '@mui/material'
import './style.scss'

// @ts-ignore
export default function LearningText({ text }) {
    return (
        <Card
            sx={{
                minHeight: '150px',
                padding: '20px',
                margin: '20px',
            }}
        >
            {text}
        </Card>
    )
}
