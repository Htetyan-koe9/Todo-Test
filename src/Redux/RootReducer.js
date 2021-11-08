//npm package
import { combineReducers } from 'redux';

//reducer
import { addNewUserReducer } from './AddNewUser/AddNewUsersReducer'
import { updateUserReducer } from './UpdateUser/UpdateUserReducer';

//FetchAll

const RootReducer = combineReducers({

    //AddNew
    addNewUser: addNewUserReducer,

    //UpdateUser
    updateUser: updateUserReducer
    
});

export default RootReducer;