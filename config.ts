import dotenv from 'dotenv'

dotenv.config()

function get(environmentVariableName: string): string {
    const environmentVariable = process.env[environmentVariableName]
    if (environmentVariable === undefined)
        throw new Error(`Cannot get the required variable '${environmentVariableName}'. Please, check .env file!`)
    return environmentVariable
}

export const TG_TOKEN = get('TG_TOKEN')
export const WEB_APP_URL = get('WEB_APP_URL')
export const TG_CHIPS_AND_TIPS_CHAT_URL = get('TG_CHIPS_AND_TIPS_CHAT_URL')
export const TG_ADMIN_ID = get('TG_ADMIN_ID')
