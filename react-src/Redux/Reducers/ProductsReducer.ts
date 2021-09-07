
const initialState = {
    result: [],
}

const ProductsReducer = (state = initialState, { type, payload }: any) => {

    const st = { ...state }

    if (type === 'PRODUCTS_SET_RESULT') {

        st.result = payload.result
    } else if (type === 'PRODUCTS_UNSET') {

        st.result = []
    }

    return st
}

export default ProductsReducer
