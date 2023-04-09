import React from 'react';
import styles from "../style";
import { Articles, ArticlesForm } from '../components';


function BlogPage() {
  return (
    <div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <ArticlesForm />
              <Articles />
            </div>
        </div>
    </div>
  )
}

export default BlogPage