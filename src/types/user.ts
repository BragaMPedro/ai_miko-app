export interface UserProps {
        name?: string,
        titles?: string[],
        gender?: string,
        pronouns?: string,
        height?: string,
        species?: string,
        language?: string,
        sexuality?: string,
        appearance?: string[],
        outfit?: string[],
        features?: FeatureProps
}

interface FeatureProps{userChoice?: string[], inferred?: string[]}