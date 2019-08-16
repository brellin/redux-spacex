import axios from 'axios'

export const AXIOS_GET = 'AXIOS_GET',
    GETTING = 'GETTING',
    SEND_ROCKET = 'SEND_ROCKET'

export const getRocket = () => dispatch => {
    dispatch({ type: GETTING })
    axios.get('https://api.spacexdata.com/v3/launches/latest')
        .then(rez => dispatch({ type: AXIOS_GET, payload: rez.data }))
        .catch(err => console.log('FAILED', err))
}

export const sendRocket = creds => {
    return dispatch => {
        axios
            .post('something.com', creds)
            .then(rez => dispatch({ type: SEND_ROCKET, payload: rez.data }))
            .catch(err => console.log(err))
    }
}
