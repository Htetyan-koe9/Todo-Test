import React from 'react';

//npm
import { useSelector, useDispatch } from 'react-redux'

//npm package
import * as MUI from '@mui/material';

//reducer function
import { updateUserName, updateEmail, updatePhoneNo } from '../Redux/UpdateUser/UpdateUserReducer'

function UserUpdateFormDialog(props) {

    const dispatch = useDispatch()

    const { id, name, email, phone } = useSelector((state) => state.updateUser)

    function handleSubmit(e) {
        e.preventDefault();
        props.updateUser(id, name, email, phone);
        props.updateFormClose();
    }

    return (
        <div>

            <MUI.Dialog open={props.open} onClose={props.addFormClose} fullWidth={true} maxWidth={'xs'}>

                <form onSubmit={handleSubmit}>
                    <MUI.DialogTitle>Update User</MUI.DialogTitle>

                    <MUI.DialogContent>

                        <MUI.TextField
                            required
                            margin="dense"
                            label="User Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={name}
                            onChange={(e) => dispatch(updateUserName(e.target.value))}
                        />
                        <MUI.TextField
                            required
                            margin="dense"
                            label="Email address"
                            type="email"
                            fullWidth
                            variant="standard"
                            value={email}
                            onChange={(e) => dispatch(updateEmail(e.target.value))}
                        />
                        <MUI.TextField
                            required
                            margin="dense"
                            label="Phone Number"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={phone}
                            onChange={(e) => dispatch(updatePhoneNo(e.target.value))}
                        />
                    </MUI.DialogContent>

                    <MUI.DialogActions>
                        <MUI.Button onClick={props.updateFormClose}>Cancel</MUI.Button>
                        <MUI.Button type='submit'>Submit</MUI.Button>
                    </MUI.DialogActions>

                </form>
            </MUI.Dialog>
        </div>
    )
}

export default UserUpdateFormDialog


