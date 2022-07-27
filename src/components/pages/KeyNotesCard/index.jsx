import React from "react";
import * as styles from './styles.module.scss';
const KeyNotesCard=()=>{
    return(
        <div className={styles.notesMain}>
            <div className={styles.notesSub}>
                <div className={styles.notesTxtCont}>
                    <h1 className={styles.notesTxt}>A Learning and healthy work enviroment</h1>
                </div>
                <div className={styles.notesBehind}></div>
                <div className={styles.overlay}>
                    <div className={styles.keyCard}>
                        <div className={styles.keyCardHead}><span className="mx-auto">Positive Work Culture</span></div>
                        <div className={styles.keyCardTxt}><p>Our aim is to maintain a positive and perfect work-life balance so that you feel satisfied and happy while working with us while contributing your best to productivity. There are ample opportunities to learn and grow professionally. Mercurysols always motivates its employees to take initiatives and work in teams. The policies intend to align personal interests with company objectives.</p></div>
                    </div>
                    <div className={styles.keyCard}>
                        <div className={styles.keyCardHead}><span className="mx-auto">Better Growth</span></div>
                        <div className={styles.keyCardTxt}><p>We, at Mercurysols, always believe in providing our employees with opportunities where they can learn about different systems and technologies that can work in favor of their overall growth. There are regular training sessions and guidance that help you progress and attain your goals in a systematic way. Work with experienced mentors and leaders who will inspire you in the right direction.</p></div>
                    </div>
                    <div className={styles.keyCard}>
                        <div className={styles.keyCardHead}><span className="mx-auto">Right Approach</span></div>
                        <div className={styles.keyCardTxt}><p>For continuous career development and growth, you need enough exposure and chances to hone your skills. Hence, we provide you with the latest technologies and resources to expand your knowledge. Considering your capabilities and interests, you will get all the opportunities to perform what you are good at. Rather than restricting you to your domain, you can contribute to different areas.

</p></div>
                    </div>
                </div>
                <div className={styles.noteMain}>
                    <div className={styles.noteSub}>
                        <h1 className={styles.noteHeading}>Looking for talented & skilled individuals</h1>
                        <h2 className={styles.noteHeadingTxt}>Mercurysols provides you with a chance to work on the latest technology and experience gradual professional growth</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default KeyNotesCard;