import type { User } from 'telegraf/types'

const language_code_white_list = ['en', 'id', 'th', 'pt', 'hi', 'es', 'ru', 'uz', 'ko', 'vi', 'de', 'tr', 'tl']

class DataParser {
    constructor() {}

    private readonly DEFAULT_LANGUAGE = 'en'

    senderData = (sender: User) => {
        let { id = '', username = '', first_name = '', last_name = '', language_code = 'en' } = sender

        console.debug(`Derive sender's data: ${JSON.stringify(sender)}`)

        if (!language_code_white_list.includes(language_code)) {
            console.debug(`Unsupported language ${language_code}. Default Setup ${this.DEFAULT_LANGUAGE}`)
            language_code = this.DEFAULT_LANGUAGE
        }

        return { id, username, first_name, last_name, language_code }
    }
}

export const parse = new DataParser()
