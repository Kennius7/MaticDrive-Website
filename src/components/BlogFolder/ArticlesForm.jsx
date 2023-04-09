import { Timestamp, addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { storage, db } from '../../firebaseConfig';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function ArticlesForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    postContent: "",
    createdAt: Timestamp.now().toDate(),
  });
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] })
  }

  const handlePublish = () => {
    if (!formData.title || !formData.description || !formData.image) {
      alert("Please fill out all necessary fields")
      return;
    }

    const storageRef = ref(storage, `/images/${Date.now()}${formData.image.name}`)

    const uploadImage = uploadBytesResumable(storageRef, formData.image)

    uploadImage.on("state_changed", (snapshot) => {
      const progressPercent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      setProgress(progressPercent);
    }, (err) => console.log(err), 
    () => {
      setFormData({title: "", description: "", postContent: "", image: ""});
      getDownloadURL(uploadImage.snapshot.ref)
      .then((url) => {
      const articleRef = collection(db, "Posts");
      addDoc(articleRef, {
        title: formData.title,
        description: formData.description,
        image: url,
        postContent: formData.postContent,
        createdAt: Timestamp.now().toDate(),
      })
      .then(() => {
        toast("Article submitted successfully", { type: "success", position: toast.POSITION.TOP_RIGHT })
        setProgress(0)
      })
      .catch(err=> {
        toast("Error submitting article!", { type: "error", position: toast.POSITION.TOP_RIGHT })
      })
      })}
      )
  }



  return (
    <div className='text-white flex flex-col'>

      <div>Create Article</div>
      <label htmlFor="">Title</label>
      <input className='bg-gray-500' type='text' name='title' value={formData.title} onChange={(e) => handleChange(e)} />

      <label htmlFor="">Description</label>
      <textarea className='bg-gray-500' name="description" value={formData.description} onChange={(e) => handleChange(e)} />

      <label htmlFor="">Post</label>
      <textarea className='bg-gray-500' name="postContent" value={formData.postContent} onChange={(e) => handleChange(e)} />

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
  )
}

export default ArticlesForm
