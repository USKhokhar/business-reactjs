import React from 'react'
import {Dialog, Button, DialogActions, DialogTitle, DialogContent, DialogContentText, TextField, Link} from '@mui/material'

export default function ForgotPass() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Link underline='hover' onClick={handleClickOpen}
      style = {{cursor: 'pointer'}}
      >
        Forgot Password?
      </Link>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Reset Password</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter your new password
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="new-pass"
            label="New Password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}