import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react';
import { db, storage } from '../../firebaseConfig';
import { deleteObject, ref } from 'firebase/storage';
import { toast } from "react-toastify";



function DeleteArticle({id, imageUrl}) {

    const handleDelete = async () => {
      if (window.confirm("Are you sure you want to delete this?")) {
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
    }


  return (
    <i onClick={handleDelete} className={`fa fa-times fa-lg cursor-pointer`} />
  )
}

export default DeleteArticle