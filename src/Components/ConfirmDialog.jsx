import React from 'react'

//npm package
import * as MUI from '@mui/material';

function ConfirmDialog(props) {

    function handleDelete() {   
        props.deleteFunction(props.id);
        props.confirmDialogClose();
    }

    return (
        <div>
            <MUI.Dialog open={props.open} onClose={props.confirmDialogClose}>
                <MUI.DialogTitle>Delete Confirmation</MUI.DialogTitle>
                <MUI.DialogContent>
                    <MUI.DialogContentText>Are you sure want to delete?</MUI.DialogContentText>
                </MUI.DialogContent>
                <MUI.DialogActions>
                    <MUI.Button onClick={props.confirmDialogClose} color="secondary">
                        Cancel
                    </MUI.Button>
                    <MUI.Button onClick={handleDelete} color="primary">
                        Delete
                    </MUI.Button>
                </MUI.DialogActions>
            </MUI.Dialog>
        </div>
    )
}

export default ConfirmDialog

