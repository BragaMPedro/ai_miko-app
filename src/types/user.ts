export interface UserProps {
        name: string,
        titles?: string[],
        gender?: string,
        pronouns: string,
        language: string,
        appearance?: string[],
        outfit?: string[],
        inferrences?: InferenceProps[]
}

interface InferenceProps{description: string, confidence:string}