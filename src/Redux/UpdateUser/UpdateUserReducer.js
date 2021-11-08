//action type
const GET_USER_DATA_TO_UPDATE = 'GET_USER_DATA_TO_UPDATE'
const UPDATE_USER_NAME = 'UPDATE_USER_NAME';
const UPDATE_EMAIL = 'UPDATE_EMAIL';
const UPDATE_PHONE_NO = 'UPDATE_PHONE_NO';

export const getUserDataToUpdate = (user) => {

    return {
        type: GET_USER_DATA_TO_UPDATE,
        payload_id: user.id,
        payload_name: user.name,
        payload_email: user.email,
        payload_phone: user.phone,
    }
}

//action creators
export const updateUserName = (name) => {
    return {
        type: UPDATE_USER_NAME,
        payload: name
    }
}

export const updateEmail = (email) => {
    return {
        type: UPDATE_EMAIL,
        payload: email
    }
}

export const updatePhoneNo = (no) => {
    return {
        type: UPDATE_PHONE_NO,
        payload: no
    }
}

//reducer
const initialUserUpdateState = {
    id: '',
    name: '',
    email: '',
    phone: '',
}

export const updateUserReducer = (state = initialUserUpdateState, action) => {
    switch (action.type) {
        case GET_USER_DATA_TO_UPDATE: return {
            // ...state,
            id: action.payload_id,
            name: action.payload_name,
            email: action.payload_email,
            phone: action.payload_phone
        }
        case UPDATE_USER_NAME: return {
            ...state,
            name: action.payload
        }
        case UPDATE_EMAIL: return {
            ...state,
            email: action.payload
        }
        case UPDATE_PHONE_NO: return {
            ...state,
            phone: action.payload
        }
        default: return state
    }
}