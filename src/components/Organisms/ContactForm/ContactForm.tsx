import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './ContactForm.module.scss';

interface FormData {
  name: string;
  lastName: string;
  companyName: string;
  area: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    lastName: '',
    companyName: '',
    area: 'web development',
    message: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to server
    console.log(formData);
    // Reset form fields
    setFormData({
      name: '',
      lastName: '',
      companyName: '',
      area: 'web development',
      message: '',
    });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label className={styles.inputName} htmlFor="name">
            Name *
          </label>
          <input
            type="text"
            className={styles.input}
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.field}>
          <label className={styles.inputName} htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className={styles.input}
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.inputName} htmlFor="companyName">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            className={styles.input}
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.inputName} htmlFor="area">
            Area
          </label>
          <select
            id="area"
            required
            name="area"
            className={styles.input}
            value={formData.area}
            onChange={handleChange}
          >
            <option value="web development">Web Development</option>
            <option value="dev design">Dev Design</option>
            <option value="both">Both</option>
          </select>
        </div>
        <div className={styles.fieldTextArea}>
          <label className={styles.inputName} htmlFor="message">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            className={styles.textArea}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.submitBtn}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
