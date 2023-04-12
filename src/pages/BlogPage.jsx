import React, { useState, useEffect } from 'react';
import styles from "../style";
import { Articles } from '../components';
import { Link } from 'react-router-dom';
import { people06 } from '../assets';
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db, auth } from "../firebaseConfig";
import { useAuthState } from 'react-firebase-hooks/auth';




function BlogPage() {
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
    <div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <div>
            <p className="text-white text-center"><Link to="/createarticle">Blog Admin Section</Link></p>

            <div>
              {
                user && articles.length > 0 ? (
                  <div className="flex flex-col justify-center items-center text-white mt-8">
                    <img className={`w-[110px] h-[110px] rounded-[50%] -mb-16 z-[1]`} src={ people06 } alt="Profile Pics" />
                    <div className={`${styles.flexCenter} ${styles.marginYPartner} 
                      ${styles.paddingPart} md:flex-row flex-col bg-black-gradient-2 text-center rounded-[15px] box-shadow text-[17px]`}>
                      <br/>
                      Hello! My name is Judith and welcome to our blog section. <br/> <br/> Anyways, here you can 
                      learn more about us and every other thing relating to Matic Drive. <br/> <br/>
                      Please feel to peruse through our blogs and drop your comments as well, as that will
                      be much welcome!
                    </div>
                  </div>) : <div></div>
              }
            </div>

          </div>
          <Articles />
        </div>
      </div>
    </div>
  )
}

export default BlogPage