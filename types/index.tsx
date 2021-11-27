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
export type PollResponse = {
    id: string,
    response_count: number,
    question_text: string
    answers_options: Array<Answer>
}