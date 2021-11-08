import React from 'react';

//npm
import { useSelector, useDispatch } from 'react-redux'

//npm package
import * as MUI from '@mui/material';

//reducer function
import { addUserName, addEmail, addPhoneNo } from '../Redux/AddNewUser/AddNewUsersReducer'

function UserAddFormDialog(props) {

    const dispatch = useDispatch()

    const { name, email, phone } = useSelector((state) => state.addNewUser)

    function handleSubmit(e) {
        e.preventDefault();
        props.addNewUser(name, email, phone);
        props.addFormClose();
    }

    return (
        <div>

            <MUI.Dialog open={props.open} onClose={props.addFormClose} fullWidth={true} maxWidth={'xs'}>

                <form onSubmit={handleSubmit}>
                    <MUI.DialogTitle>Add New Users</MUI.DialogTitle>

                    <MUI.DialogContent>

                        <MUI.TextField
                            required
                            margin="dense"
                            label="User Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={(e) => dispatch(addUserName(e.target.value))}
                        />
                        <MUI.TextField
                            required
                            margin="dense"
                            label="Email address"
                            type="email"
                            fullWidth
                            variant="standard"
                            onChange={(e) => dispatch(addEmail(e.target.value))}
                        />
                        <MUI.TextField
                            required
                            margin="dense"
                            label="Phone Number"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={(e) => dispatch(addPhoneNo(e.target.value))}
                        />
                    </MUI.DialogContent>

                    <MUI.DialogActions>
                        <MUI.Button onClick={props.addFormClose}>Cancel</MUI.Button>
                        <MUI.Button type='submit'>Submit</MUI.Button>
                    </MUI.DialogActions>

                </form>
            </MUI.Dialog>
        </div>
    )
}

export default UserAddFormDialog
