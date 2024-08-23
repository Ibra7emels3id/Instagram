import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import app, { auth, firestore, storage } from '../../firebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

// Handle File Upload
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 100,
});

const FormPost = ({ Dial }) => {
    const userAuth = useAuthState(auth)
    const [open, setOpen] = useState(false);
    const [FormData, setFormData] = useState({
        caption: '',
        image: null,
    });

    // Get User Auth
    let user = userAuth

    const handleClose = () => {
        setOpen(false);
    };

    // Send Data 
    const handleSubmitData = async (e) => {
        e.preventDefault();

        // Send Data To Firebase
        try {
            const imagePost = ref(storage, `blogs/${FormData.image.name}`)

            await Promise.all([
                uploadBytes(imagePost, FormData.image),
            ]);

            const urlImage = await getDownloadURL(imagePost)
            

            const docRef = await addDoc(collection(firestore, 'Blogs'), {
                name: user[0]?.displayName || "Unknown User",
                email: user[0]?.email || "No Email",
                userId: user[0]?.uid || "No User ID",
                userName: user[0]?.displayName || "Anonymous",
                imageAccount: user[0]?.photoURL || "",
                imagePost: urlImage ,
                caption: FormData.caption || "No Caption",
                date: new Date().toDateString(),
                time: new Date().toLocaleTimeString(),
                likes: 0,
                shares: 0,
                comments: 0,
                commentsDetals:[
                    {
                        userId: user[0]?.uid || "No User ID",
                        userName: user[0]?.displayName || "Anonymous",
                        comment: "No Comment",
                        date: new Date().toDateString(),
                        time: new Date().toLocaleTimeString(),
                        likes: 0,
                        shares: 0,
                    }
                ]
            });
            setFormData({
                caption: '',
                image: null,
            })
            setOpen(false);
            console.log("Document written with ID: ", docRef.id);
            toast.success('Document written Successfully');
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        setOpen(Dial);
    }, [Dial]);
    return (
        <>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>Create your Post </DialogTitle>
                <DialogContent sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 2,
                    flexDirection: 'column',
                    marginTop: 3,
                }} >
                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                    >
                        Upload file
                        <input hidden type="file" onChange={(e) => {
                            setFormData({...FormData , image: e.target.files[0]});
                        }} />
                        <VisuallyHiddenInput type="file" />
                    </Button>
                    <img src={FormData.image} alt="" />
                    <textarea onChange={(e) => {
                        setFormData({ ...FormData, caption: e.target.value })
                    }} value={FormData.caption} className=' w-96 outline-none p-3 bg-zinc-200' type="text" name="title" id="" />
                </DialogContent>
                <DialogActions sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10', justifyContent: 'center' }}>
                    <button type='submit' className='bg-[#0095f6] font-bold text-white h-12  w-full block' onClick={handleSubmitData}>Create</button>

                </DialogActions>
            </Dialog>
        </>
    );
}

export default FormPost;
