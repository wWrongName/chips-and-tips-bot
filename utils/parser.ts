import type { User } from 'telegraf/types'

class DataParser {
    constructor() {}

    senderData = (sender: User) => {
        const { id = '', username = '', first_name = '', last_name = '', language_code = 'en' } = sender
        return { id, username, first_name, last_name, language_code }
    }
}

export const parse = new DataParser()
