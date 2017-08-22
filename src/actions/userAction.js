import axios from 'axios'

export const USER_LIST = "USER_LIST"

const getList = () => {
    return (dispatch, getState) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((r) => {
                dispatch({
                    "type": USER_LIST,
                    list: r.data
                })
            })
    }
}

export { getList }