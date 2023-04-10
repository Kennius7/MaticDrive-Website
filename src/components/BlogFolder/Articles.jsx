import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db, auth } from "../../firebaseConfig";
import DeleteArticle from './DeleteArticle';
import { useAuthState } from 'react-firebase-hooks/auth';
import { LikeArticles } from "../../components";
import { Link } from 'react-router-dom';


function Articles() {
  const [articles, setArticles] = useState([]);
  const [user] = useAuthState(auth);

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
          articles.length === 0 ? (<p>No Articles found!</p>) : (articles.map(({ id, title, description, postContent, imageUrl, createdAt, createdBy, userId, likes, comments }) => (
            <div className="bg-gray-300 my-12" key={id}>
              <div>
                
                <div>{user && userId === userId && (<DeleteArticle id={id} imageUrl={imageUrl} />)}</div>
              </div>
              <Link to={`/article/${id}`}>
                <img src={imageUrl} alt='Post Picture' />
              </Link>
              
              <div className='font-bold text-[20px]'>{title}</div>
              <div className='font-semibold text-[17px]'>{description}</div>
              <div>{postContent}</div>
              <div className="mt-8">{createdBy && 
                (<div>
                  <span className="text-[15px]">Created by: </span> 
                  <span className="font-semibold">{createdBy}</span>
                </div>)}
              </div>
              <div><span className="text-[15px]">Created At:</span> <span className="text-blue-700">{createdAt.toDate().toDateString()}</span></div>
              
              <div className="flex flex-row">
                <div className="flex flex-row">
                  {
                    user && (<LikeArticles id={id} likes={likes} />)
                  }
                  <div className="ml-2">
                    <div>
                      {
                        likes && likes.length > -1 && (
                          <p>{ likes?.length } likes</p>
                        )
                      }
                    </div>
                  </div>
                </div>
                <div className="ml-2">
                  <div>
                    {
                      comments && comments.length > -1 && (
                        <div>
                          <p>{ comments?.length } comments</p>
                        </div>
                      )
                    }
                  </div>
                </div>
              </div>
              
            </div>
            )))
        }
    </div>
  )
}

export default Articles