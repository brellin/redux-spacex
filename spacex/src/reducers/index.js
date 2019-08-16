import { AXIOS_GET, GETTING, SEND_ROCKET } from '../actions'

const initialState = {
    rocket: null,
    gotten: false,
    getting: false
}

export default (state = initialState, action) => {

    switch (action.type) {
        case GETTING:
            return {
                ...state,
                getting: true
            }
        case AXIOS_GET:
            return {
                ...state,
                gotten: true,
                rocket: action.payload
            }
        case SEND_ROCKET:
            return {
                ...state,
                something: 'else'
            }
        default:
            return state
    }

}
