import { Timestamp, addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { storage, db, auth } from '../../firebaseConfig';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from 'react-router-dom';



function ArticlesForm() {
  const [user] = useAuthState(auth);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    postContent: "",
    createdAt: Timestamp.now().toDate(),
  });
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleImageChange = (e) => {
    setFormData({ ...formData, imageUrl: e.target.files[0] })
  }

  const handlePublish = () => {
    if (!formData.title || !formData.description || !formData.imageUrl) {
      alert("Please fill out all necessary fields")
      return;
    }

    const storageRef = ref(storage, `/images/${Date.now()}${formData.imageUrl.name}`)

    const uploadImage = uploadBytesResumable(storageRef, formData.imageUrl)

    uploadImage.on("state_changed", (snapshot) => {
      const progressPercent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      setProgress(progressPercent);
    }, (err) => console.log(err), 
    () => {
      setFormData({title: "", description: "", postContent: "", imageUrl: ""});
      getDownloadURL(uploadImage.snapshot.ref)
      .then((url) => {
      const articleRef = collection(db, "Posts");
      addDoc(articleRef, {
        title: formData.title,
        description: formData.description,
        imageUrl: url,
        postContent: formData.postContent,
        createdAt: Timestamp.now().toDate(),
        createdBy: user.displayName,
        userId: user.uid,
        likes: [],
        comments: [],
      })
      .then(() => {
        toast("Article submitted successfully", { type: "success", position: toast.POSITION.TOP_RIGHT })
        setProgress(0)
      })
      .catch((err) => {
        toast("Error submitting article!", { type: "error", position: toast.POSITION.TOP_RIGHT })
      })
      })}
      )
  }





  return (
    <div className='text-white flex flex-col'>
      
      {
        !user ? <div className='p-2 bg-black-gradient-2 rounded-[10px] box-shadow'>
                  <span className='font-semibold text-[20px]'><Link className='text-[25px] text-gradient' to="/signin">Login</Link> to access Blog Section</span> <br/> Don't have an account? <Link className='text-gradient' to="/signup">Sign up</Link>
                </div> : <div>
                <div className='my-4 font-bold text-[25px] text-center'>Create Article</div>
                  <div className='flex flex-col mb-4'>
                    <label htmlFor="">Title</label>
                    <input className='bg-white text-primary placeholder-gray-300' placeholder='Post Title' type='text' name='title' value={formData.title} onChange={(e) => handleChange(e)} />
                  </div>
                  
                  <div className='flex flex-col mb-4'>
                    <label htmlFor="">Description</label>
                    <textarea className='bg-white text-primary placeholder-gray-300' placeholder='Post Description' name="description" value={formData.description} onChange={(e) => handleChange(e)} />
                  </div>
                  
                  <div className='flex flex-col mb-4'>
                    <label htmlFor="">Post</label>
                    <textarea className='bg-white text-primary placeholder-gray-300' placeholder='Post Content' name="postContent" value={formData.postContent} onChange={(e) => handleChange(e)} />
                  </div>
                  

                  <label htmlFor="">Image</label>
                  <input type='file' name='image' accept='image/*' onChange={(e) => handleImageChange(e)} />

                  {progress === 0 ? null : (
                    <div className="">
                      <div className="progress">
                        <div className={`w-[${progress}%] h-[20px] bg-blue-300 progress-bar progress-bar-striped`}>{`Uploading Image ${progress}%`}</div>
                      </div>
                    </div>
                  )}

                  <button className='w-[100px] h-[30px] rounded-[8px] bg-blue-500 mt-10' onClick={handlePublish}>Publish</button>
                </div>
      }

      
    </div>
  )
}

export default ArticlesForm
