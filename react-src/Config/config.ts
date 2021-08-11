
import rnConfig from 'react-native-config'

const config = {
    environment: rnConfig.ENVIRONMENT,
    server: {
        host: rnConfig.SERVER_HOST
    },
    app: {
        androidVersion: (rnConfig.ENVIRONMENT === 'development' ? 'dev-' : '') + rnConfig.APP_ANDROID_VERSION
    }
}

export default config