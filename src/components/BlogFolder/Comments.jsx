import { arrayRemove, arrayUnion, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { v4 as uuidv4 } from 'uuid';




function Comments({id}) {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");
    const [currentlyLoggedInUser] = useAuthState(auth);

    const commentRef = doc(db, "Posts", id);

    useEffect(() => {
    const docRef = doc(db, "Posts", id);
    onSnapshot(docRef, (snapshot) => {setComments([...snapshot.data().comments])})
    }, [])
    
    const handleChangeComment = (e) => {
        if (e.key === "Enter") {
            updateDoc(commentRef, {
                comments: arrayUnion({
                    user: currentlyLoggedInUser.uid,
                    userName: currentlyLoggedInUser.displayName,
                    comment: comment,
                    createdAt: new Date(),
                    commentId: uuidv4(),
                })
            })
            .then(() => {
                setComment("");
            });
        }
    }

    const handleDeleteComment = (comment) => {
        console.log(comment);
        updateDoc(commentRef, {
            comments: arrayRemove(comment)
        })
        .then((e) => {
            console.log(e);
        })
        .catch((error) => {
            console.log(error);
        })
    }





  return (
    <div>
        <div>
            {
                comments !== null && comments.map(
                    ({ commentId, user, comment, userName, createdAt }) => 
                        <div key={commentId}>
                            <div>
                                <span className={`${user === currentlyLoggedInUser.uid ? "bg-blue-500" : "bg-red-500"}`}>{ userName }</span>
                                { comment }
                            </div>
                            <div>
                                {
                                    user === currentlyLoggedInUser.uid && (
                                        <i className="fa fa-times fa-lg text-white cursor-pointer" 
                                            onClick={() => { handleDeleteComment({comment, commentId, user, userName, createdAt}) }} />
                                    )
                                }
                            </div>
                        </div>
                    )
            }
        </div>
        <div>
            {
                currentlyLoggedInUser && (
                    <input 
                    type="text" 
                    className="bg-gray-500" 
                    value={comment} 
                    onChange={(e) => { setComment(e.target.value) }} 
                    placeholder="Add a comment" 
                    onKeyUp={(e) => { handleChangeComment(e) }}
                    />
                )
            }
        </div>
    </div>
  )
}

export default Comments