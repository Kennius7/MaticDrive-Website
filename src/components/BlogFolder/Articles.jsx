import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db, auth } from "../../firebaseConfig";
import DeleteArticle from './DeleteArticle';
import { useAuthState } from 'react-firebase-hooks/auth';
import { LikeArticles } from "../../components";
import { Link } from 'react-router-dom';
import styles from '../../style';
import { people06 } from '../../assets';
import parse from 'html-react-parser';


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
    <div className="">
        {
          !user || articles.length === 0 ? (
            <div className="flex flex-col justify-center items-center text-white mt-8">
              <img className={`w-[110px] h-[110px] rounded-[50%] -mb-16 z-[1]`} src={ people06 } alt="Profile Pics" />
              <div className={`${styles.flexCenter} ${styles.marginYPartner} 
                 ${styles.paddingPart} md:flex-row flex-col bg-black-gradient-2 text-center rounded-[15px] box-shadow text-[17px]`}>
                 <br/>
                 Hello! My name is Judith and welcome to our blog section. <br/> <br/> You're most probably 
                 seeing this page because you are not signed in or you are having some issues with your internet.
                  <br/> <br/> Anyways, here you can learn more about us and every other thing relating 
                  to Matic Drive. <br/> <br/>
                 Please feel to peruse through our blogs and drop your comments as well, as that will
                 be much welcome! <br/> <br/> Just reload your page and you'll be good to go!
              </div>
            </div>) : (articles.map(({ id, title, description, postContent, imageUrl, createdAt, createdBy, userId, likes, comments }) => (
                <div className="bg-gray-300 my-12" key={id}>
                  <div>
                    <div>{user && userId === userId && (<DeleteArticle id={id} imageUrl={imageUrl} />)}</div>
                  </div>
                  <Link to={`/article/${id}`}>
                    <img src={imageUrl} alt='Post Picture' />
                  </Link>
                  
                  <div className='font-bold text-[20px]'>{title}</div>
                  <div className='font-semibold text-[17px]'>{description}</div>
                  <div>{parse(postContent)}</div>
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
                              <p><Link to={`/article/${id}`}>{ comments?.length } comments</Link></p>
                            </div>
                          )
                        }
                      </div>
                    </div>
                  </div>
                </div>
              )
            )
          )
        }
    </div>
  )
}

export default Articles