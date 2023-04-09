import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react';
import { db, storage } from '../../firebaseConfig';
import { deleteObject, ref } from 'firebase/storage';
import { toast } from "react-toastify";


function DeleteArticle({id, imageUrl}) {
    const handleDelete = async () => {
        try {
            await deleteDoc(doc(db, "Posts", id))    
            toast("Article deleted successfully", { type: "success", position: toast.POSITION.TOP_RIGHT })
            const storageRef = ref(storage, imageUrl)
            await deleteObject(storageRef)
        } catch (error) {
            toast("Error deleting article!", { type: "error", position: toast.POSITION.TOP_RIGHT })
            console.log(error);
        }
        
    }


  return (
    <button onClick={handleDelete} className="py-1 px-6 font-poppins font-medium text-[15px] text-primary bg-red-400 rounded-[7px] outline-none">Delete</button>
  )
}

export default DeleteArticle