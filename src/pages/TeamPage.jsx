import React from 'react';
import styles from "../style";
import { TeamPlayers } from "../components";


function TeamPage() {
  return (
    <div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <TeamPlayers />
            </div>
        </div>
    </div>
  )
}

export default TeamPage