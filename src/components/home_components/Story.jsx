import { Box, Fab } from '@mui/material';
import React from 'react';


// import styles materul ui 
import AddIcon from '@mui/icons-material/Add';

const Story = () => {
    return (
        <div className="w-[50%] m-auto h-[14vh] flex items-center justify-start bg-[#000] overflow-x-scroll scrollbar-hide whitespace-nowrap">
            <div className="box flex-shrink-0 flex items-center justify-center flex-col mx-2">
                <div className="rounded-full p-1 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                    <Box sx={{ '& > :not(style)': { m: 0 } }}>
                        <Fab color="primary" aria-label="add">
                            <AddIcon sx={{backgroundColor:'black' , width:'100%' , height:'100%' , borderRadius:'50%'}} />
                        </Fab>
                    </Box>
                </div>
                <h3 className="text-center mt-2 text-sm font-semibold">New Story</h3>
            </div>
            <div className="box flex-shrink-0 flex items-center justify-center flex-col mx-2">
                <div className="rounded-full p-1 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                    <img src='https://mui.com/static/images/avatar/1.jpg' alt='user' className="object-cover rounded-full w-14 h-14 border-2 border-white" />
                </div>
                <h3 className="text-center mt-2 text-sm font-semibold">user</h3>
            </div>
            <div className="box flex-shrink-0 flex items-center justify-center flex-col mx-2">
                <div className="rounded-full p-1 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                    <img src='https://mui.com/static/images/avatar/1.jpg' alt='user' className="object-cover rounded-full w-14 h-14 border-2 border-white" />
                </div>
                <h3 className="text-center mt-2 text-sm font-semibold">user</h3>
            </div>
            <div className="box flex-shrink-0 flex items-center justify-center flex-col mx-2">
                <div className="rounded-full p-1 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                    <img src='https://mui.com/static/images/avatar/1.jpg' alt='user' className="object-cover rounded-full w-14 h-14 border-2 border-white" />
                </div>
                <h3 className="text-center mt-2 text-sm font-semibold">user</h3>
            </div>
            <div className="box flex-shrink-0 flex items-center justify-center flex-col mx-2">
                <div className="rounded-full p-1 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                    <img src='https://mui.com/static/images/avatar/1.jpg' alt='user' className="object-cover rounded-full w-14 h-14 border-2 border-white" />
                </div>
                <h3 className="text-center mt-2 text-sm font-semibold">user</h3>
            </div>
            <div className="box flex-shrink-0 flex items-center justify-center flex-col mx-2">
                <div className="rounded-full p-1 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                    <img src='https://mui.com/static/images/avatar/1.jpg' alt='user' className="object-cover rounded-full w-14 h-14 border-2 border-white" />
                </div>
                <h3 className="text-center mt-2 text-sm font-semibold">user</h3>
            </div>
            <div className="box flex-shrink-0 flex items-center justify-center flex-col mx-2">
                <div className="rounded-full p-1 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                    <img src='https://mui.com/static/images/avatar/1.jpg' alt='user' className="object-cover rounded-full w-14 h-14 border-2 border-white" />
                </div>
                <h3 className="text-center mt-2 text-sm font-semibold">user</h3>
            </div>
            <div className="box flex-shrink-0 flex items-center justify-center flex-col mx-2">
                <div className="rounded-full p-1 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                    <img src='https://mui.com/static/images/avatar/1.jpg' alt='user' className="object-cover rounded-full w-14 h-14 border-2 border-white" />
                </div>
                <h3 className="text-center mt-2 text-sm font-semibold">user</h3>
            </div>
            <div className="box flex-shrink-0 flex items-center justify-center flex-col mx-2">
                <div className="rounded-full p-1 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                    <img src='https://mui.com/static/images/avatar/1.jpg' alt='user' className="object-cover rounded-full w-14 h-14 border-2 border-white" />
                </div>
                <h3 className="text-center mt-2 text-sm font-semibold">user</h3>
            </div>
            <div className="box flex-shrink-0 flex items-center justify-center flex-col mx-2">
                <div className="rounded-full p-1 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                    <img src='https://mui.com/static/images/avatar/1.jpg' alt='user' className="object-cover rounded-full w-14 h-14 border-2 border-white" />
                </div>
                <h3 className="text-center mt-2 text-sm font-semibold">user</h3>
            </div>
        </div>

    );
};

export default Story;
