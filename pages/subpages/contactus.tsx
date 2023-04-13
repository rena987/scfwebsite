import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from '@/styles/ContactUs.module.css'

export function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        message: '',
        email: '',
    });



    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Handle success
                alert('Form submitted successfully!');
            } else {
                // Handle error
                alert('Failed to submit form. Please try again later.');
            }
        } catch (error) {
            // Handle error
            alert('Failed to submit form. Please try again later.');
        }
    };

    return(
        <>
            <form className={styles.formBoundary} action="/contact" method="post" onSubmit={handleSubmit}>
                    <div>
                        <input
                            className={styles.blockBoundary}
                            id="frm-name"
                            placeholder="Name"
                            name="name"
                            value={formData.name} // Add value attribute
                            onChange={handleChange} // Add onChange attribute
                            required
                        />
                    </div>
                    <div>
                        <input
                                className={styles.blockBoundary}
                                id="frm-subject"
                                placeholder="Subject"
                                name="subject"
                                value={formData.subject} // Add value attribute
                                onChange={handleChange} // Add onChange attribute
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
                            value={formData.message} // Add value attribute
                            onChange={handleChange} // Add onChange attribute
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
                            value={formData.email} // Add value attribute
                            onChange={handleChange} // Add onChange attribute

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