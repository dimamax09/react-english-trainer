import { Card } from '@mui/material'

export default function LearningText({ text }: any) {
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
