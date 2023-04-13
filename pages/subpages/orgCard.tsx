import Image from 'next/image';
import styles from '@/styles/orgCard.module.css';

export default function orgCard({}) {
    return (
        <div className={styles.orgCardWrapper}>
            <img 
                src='/GraykeaIcon.jpg'
                alt="Logo"
            />
            <div className={styles.orgCardRightColumn}>
                <div className={styles.orgCardTitle}>
                    Graykea
                </div>
                <div className = {styles.orgCardDescription}>
                    Enabling Education Without Financial Burden.
                </div>
                <div className = {styles.orgCardTags}>
                    <button className={styles.myButton}>Finance</button>
                    <button className={styles.myButton}>Education</button>
                </div>
                <div className = {styles.orgCardTimeSlot}>
                    <button className={styles.myOtherButton}>Book Time Slot</button>
                </div>
            </div>
        </div>
    );
}