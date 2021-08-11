
import config from './config'

const EndPoints = {
    login: `${config.server.host}/api/login`,
    register: `${config.server.host}/api/register`
}

export default EndPoints
