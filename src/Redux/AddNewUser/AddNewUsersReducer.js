//action type
const ADD_USER_NAME = 'ADD_USER_NAME';
const ADD_EMAIL = 'ADD_EMAIL';
const ADD_PHONE_NO = 'ADD_PHONE_NO';

//action creators
export const addUserName = (name) => {
    return {
        type: ADD_USER_NAME,
        payload: name
    }
}

export const addEmail = (email) => {
    return {
        type: ADD_EMAIL,
        payload: email
    }
}

export const addPhoneNo = (no) => {
    return {
        type: ADD_PHONE_NO,
        payload: no
    }
}

//reducer
const initialUserCreateState = {
    name: '',
    email: '',
    phone: '',
}

export const addNewUserReducer = (state = initialUserCreateState, action) => {
    switch (action.type) {
        case ADD_USER_NAME: return {
            ...state,
            name: action.payload
        }
        case ADD_EMAIL: return {
            ...state,
            email: action.payload
        }
        case ADD_PHONE_NO: return {
            ...state,
            phone: action.payload
        }
        default: return state
    }
}