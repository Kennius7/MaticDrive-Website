import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import DeleteArticle from './DeleteArticle';



function Articles() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const articleRef = collection(db, "Posts");
    const q = query(articleRef, orderBy("createdAt", "desc"));

    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
      console.log(articles);
    })
  }, [])


  return (
    <div className='text-primary'>
        {
          articles.length === 0 ? (<p>No Articles found!</p>) : (articles.map(({id, title, description, postContent, imageUrl, createdAt}) => (
            <div className="bg-gray-300 my-4" key={id}>
              <img src={imageUrl} alt='Post Picture' />
              <div className='font-bold text-[20px]'>{title}</div>
              <div className='font-semibold text-[17px]'>{description}</div>
              <div>{postContent}</div>
              <div><span className="text-[17px]">Created At:</span> <span className="text-blue-700">{createdAt.toDate().toDateString()}</span></div>
              <DeleteArticle id={id} imageUrl={imageUrl} />
            </div>
            )))
        }
    </div>
  )
}

export default Articles