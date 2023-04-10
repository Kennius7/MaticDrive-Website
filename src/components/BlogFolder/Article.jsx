import { doc, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { auth, db } from '../../firebaseConfig';
import LikeArticles from './LikeArticles';
import { useAuthState } from 'react-firebase-hooks/auth';
import Comments from './Comments';



function Article() {
    const {id} = useParams();
    const [article, setArticle] = useState(null);
    const [user] = useAuthState(auth);

    useEffect(() => {
      const docRef = doc(db, "Posts", id);
      onSnapshot(docRef, (snapshot) => { setArticle({ ...snapshot.data(), id: snapshot.id }) })
    }, [])


  return (
    <div>
        <div>
            {
                article && (
                            <div className="bg-primary">
                                <img src={ article.imageUrl } alt={ article.title } />
                                <div className="text-white">
                                    <div>{ article.title }</div>
                                    <div>{ article.description }</div>
                                    <hr className="bg-black"/>
                                    <div>Author: { article.createdBy }</div>
                                    <div>Posted on: { article.createdAt.toDate().toDateString() }</div>
                                    <div>
                                        { user && (<LikeArticles id={id} likes={article.likes} />) }
                                        <div>
                                            <p>{ article.likes.length }</p>
                                        </div>
                                    </div>
                                    <Comments id={ article.id } />
                                </div>
                            </div>
                )
            }
        </div>
    </div>
  )
}

export default Article