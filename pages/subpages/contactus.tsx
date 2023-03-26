import styles from '@/styles/ContactUs.module.css'

export function ContactUs() {
    return(
        <>
            <form className = {styles.formBoundary}>
                    <div>
                        <input
                            className={styles.blockBoundary}
                            id="frm-name"
                            placeholder="Name"
                            name="name"
                            required
                        />
                    </div>
                    <div>
                        <input
                                className={styles.blockBoundary}
                                id="frm-subject"
                                placeholder="Subject"
                                name="subject"
                                required
                        />
                    </div>
                    <div>
                        <textarea
                            className={styles.blockBoundary}
                            id="frm-message"
                            name="message"
                            rows="10"
                            placeholder="Type your message here . . ."
                            required
                        />
                    </div>
                    <div>
                        <input
                            className={styles.blockBoundary}
                            id="frm-email"
                            type="email"
                            placeholder="Email"
                            name="email"
                            autoComplete="email"
                            required
                        />
                    </div>
                    <div>
                        <button className={styles.myButton}>Submit</button>
                    </div>
                </form>
        </>
    );
}