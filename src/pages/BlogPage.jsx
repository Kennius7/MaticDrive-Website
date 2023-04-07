import React from 'react';
import styles from "../style";
import { Blog } from "../components";


function BlogPage() {
  return (
    <div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Blog />
            </div>
        </div>
    </div>
  )
}

export default BlogPage