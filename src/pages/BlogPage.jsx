import React from 'react';
import styles from "../style";
import { Articles } from '../components';
import { Link } from 'react-router-dom';


function BlogPage() {
  return (
    <div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <div>
                <p className="text-white text-center"><Link to="/createarticle">Blog Admin Section</Link></p>
              </div>
              <Articles />
            </div>
        </div>
    </div>
  )
}

export default BlogPage