import * as React from "react";
import { styled } from '@mui/system';
import { Dialog } from "@mui/material";
import { DialogContent } from "@mui/material";
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

type Props = {
    selectedImage: string | null
    openImage: boolean
    handleCloseImage: () => void
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(2)
    },
    "& .MuiDialogAction-root": {
        padding: theme.spacing(1)
    }
}))

export default function ImageDialog({ selectedImage, openImage, handleCloseImage }: Props) {
    return (
        <React.Fragment>
            <BootstrapDialog
                aria-labelledby="customized-dialog-title"
                onClose={handleCloseImage}
                open={openImage}
            >
                <IconButton
                    aria-label="close"
                    sx={{
                        position: "absolute",
                        top: 20,
                        right: 20,
                        color: "white",
                        background: "black"
                    }}
                    onClick={handleCloseImage}
                >
                    <CloseIcon
                        sx={{
                            background: "black",
                            borderRadius: "100%",
                            width: 25,
                            height: 25
                        }}
                    />
                </IconButton>
                <DialogContent>
                    <img
                        src={selectedImage ? selectedImage : "undefined"}
                        className="h-[400px] w-[500px]"
                    />
                </DialogContent>
            </BootstrapDialog>
        </React.Fragment>
    )
}