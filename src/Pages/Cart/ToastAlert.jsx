import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import { Button, IconButton } from '@mui/material';

export const ToastAlert = ({ handleClose, open }) => {

    const action = (
        <>
            <Button color="primary" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </>
    );

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Product added to cart successfully"
            action={action}
        />
    )

}