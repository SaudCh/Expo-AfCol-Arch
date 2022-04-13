import { DEV_API, PROD_API } from '@env'

const devEnvVariable = {
    DEV_API
}

const prodEnvVariable = {
    PROD_API
}

export default __DEV__?devEnvVariable:prodEnvVariable