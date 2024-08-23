import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { firestore } from '../../firebaseConfig';
import Post from './Post';

const AllBost = () => {
    const [FormData, setFormData] = useState();

    const GetDataFireStore = async () => {
        try {
            const querySnapshot = await getDocs(collection(firestore, "Blogs"));
            const docs = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setFormData(docs);
        } catch (error) {
            console.error("Error fetching documents: ", error);
        } finally{
            // console.log("Data fetched successfully");
        }
    }


    const AllData = FormData?.map((item) => {
        return (
            <>
                <Post name={item.name} date={item.date} time={item.time} imagePost={item?.imagePost} imageAccount={item?.imageAccount} />
            </>
        )
    })


    useEffect(() => {
        GetDataFireStore();
    }, [FormData]);

    return (
        <>
            <div className="bosts mt-8 w-[50%] m-auto gap-4 flex flex-col">
                {AllData}
            </div>
        </>
    );
}

export default AllBost;
