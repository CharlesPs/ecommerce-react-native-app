
import EndPoints from '../Config/endpoints'

import { get } from '../Helpers/HttpHelper'

export const getProducts = async () => {

    const url = EndPoints.products

    try {

        const res_data = await get(url, 'PRODUCTS_LOAD_RESULT')

        return res_data
    } catch (error) {

        throw error
    }
}

export default {
    getProducts,
}
