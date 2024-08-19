import React from 'react';

// import matryal ui
import TelegramIcon from '@mui/icons-material/Telegram';

const Chats = () => {
    return (
        <>
            <div className="component fixed right-0 top-16 w-[25%] bg-black rounded-xl h-[90vh] border border-[#242424] b-white">
                <div className="flex flex-col pt-8 gap-3">
                    <div className="user flex items-center mx-6 justify-between">
                        <div className="icon flex items-center">
                            <img className=' rounded-full w-20' src='https://mui.com/static/images/avatar/1.jpg' alt="User 1" />
                            <div className="status ml-4">
                            <h3>Ibrahem Elsaid</h3>
                            <p className='text-[10px]'>Last seen: 2 hours ago</p>
                        </div>
                        </div>
                        <div className="icon">
                            <button className=' text-white font-bold py-2 px-4 rounded'><TelegramIcon /></button>
                        </div>
                    </div>
                    <div className="user flex items-center mx-6 justify-between">
                        <div className="icon flex items-center">
                            <img className=' rounded-full w-20' src='https://mui.com/static/images/avatar/1.jpg' alt="User 1" />
                            <div className="status ml-4">
                            <h3>Ibrahem Elsaid</h3>
                            <p className='text-[10px]'>Last seen: 2 hours ago</p>
                        </div>
                        </div>
                        <div className="icon">
                            <button className=' text-white font-bold py-2 px-4 rounded'><TelegramIcon /></button>
                        </div>
                    </div>
                    <div className="user flex items-center mx-6 justify-between">
                        <div className="icon flex items-center">
                            <img className=' rounded-full w-20' src='https://mui.com/static/images/avatar/1.jpg' alt="User 1" />
                            <div className="status ml-4">
                            <h3>Ibrahem Elsaid</h3>
                            <p className='text-[10px]'>Last seen: 2 hours ago</p>
                        </div>
                        </div>
                        <div className="icon">
                            <button className=' text-white font-bold py-2 px-4 rounded'><TelegramIcon /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Chats;
