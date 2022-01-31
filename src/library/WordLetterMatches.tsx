export class WordLetterMatches {

    private haystack: string = ''
    private needle: string = ''

    constructor (hayStack: string, needle: string)  {
        this.haystack = hayStack.toLowerCase()
        this.needle = needle.toLowerCase()
    }

    matches(): number {

        let matches = 0

        let loopHaystack: number
        let loopNeedle: number
        for (loopHaystack = 0; loopHaystack < this.haystack.length; loopHaystack++) {
            for (loopNeedle = 0; loopNeedle < this.needle.length; loopNeedle++) {
                if (this.haystack[loopHaystack] === this.needle[loopNeedle]) {
                    matches++
                }
            }
        }
        return matches

    }

}
