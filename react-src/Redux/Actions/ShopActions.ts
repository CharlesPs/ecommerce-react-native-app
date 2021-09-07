import ShopService from "../../Services/ShopService"

export const actionLoadProducts = () => {

    return async (dispatch: any) => {

        try {

            const data = await ShopService.getProducts()

            if (data.length) {

                dispatch({
                    type: 'PRODUCTS_SET_RESULT',
                    payload: {
                        result: data,
                    }
                })
            }
        } catch (error) {

            throw error
        }
    }
}
