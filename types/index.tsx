export type Answer = {
    slug: string
    text: string
}

export type Poll = {
    id: string
    responseCount: number
    question: string
    answerOptions: Array<Answer>
} 