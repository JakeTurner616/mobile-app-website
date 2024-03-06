import React from 'react';
import TermsOfServiceHistory from '../TermsOfServiceHistory/TermsOfServiceHistory';
import styles from './TermsOfServicePage.module.css'; // Import CSS module
import Footer from '../Footer/Footer';

const TermsOfServicePage = () => {
    return (
        <div>
<div className={styles['page-container']}>
    <h1 className={styles['page-title']}>Terms of Service</h1>
    <div className={styles['scrollable-content']}>
        <TermsOfServiceHistory />
    </div>
    <div className={styles['privacy-policy-container']}>
        <h2 className={styles['section-title']}>Privacy Policy</h2>
                    <p className={styles['paragraph']}>Just to be clear, when I, <a href="mailto:jake@serverboi.org" className={styles['link']}>jake@serverboi.org</a>, use 'we/our,' I'm referring to myself as the sole representative of serverboi.org.</p>
                    <p className={styles['paragraph']}>On behalf of serverboi.org, we take your privacy very seriously. This Privacy Policy outlines how we collect, use, and protect your information.</p>

                    <h3 className={styles['sub-section-title']}>Information We Collect</h3>
                    <p className={styles['paragraph']}>Our app may on occasion collect images and text prompts that are generated by users. We do not collect any other personal information, such as your name, email address, or location. However, we may collect certain non-personal information related to ad analytics, such as the number of times the app is used and the type of device used to access the app.</p>

                    <h3 className={styles['sub-section-title']}>How We Use Your Information</h3>
                    <p className={styles['paragraph']}>We use the images generated by users solely for the purpose of displaying them in the app and improving the service. We do not share, sell, or distribute the images to any third parties.</p>

                    <h3 className={styles['sub-section-title']}>How We Protect Your Information</h3>
                    <p className={styles['paragraph']}>We take appropriate measures to protect your information from unauthorized access, alteration, or disclosure. We use industry-standard security measures, such as encryption and firewalls, to protect your information.</p>
                    <p className={styles['paragraph']}>However, please note that no method of transmission over the internet or method of electronic storage is 100% secure. Therefore, while we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.</p>

                    <h3 className={styles['sub-section-title']}>Face Data</h3>
                    <h4 className={styles['sub-sub-section-title']}>Collection of Face Data:</h4>
                    <p className={styles['paragraph']}>Real Art AI allows users to upload images containing their faces for basic re-constructive tasks using AI, such as colorization or editing. The uploaded image, which may include the user's face, along with the generated output image and the associated generation parameters, are sent to our server for processing.</p>
                    <h4 className={styles['sub-sub-section-title']}>Use of Face Data:</h4>
                    <p className={styles['paragraph']}>We utilize the collected face data, including the uploaded image, generated output image, and generation parameters, to optimize our service and improve the user experience. This analysis helps us understand how users interact with the app, identify usage patterns, and fine-tune parameter settings for future updates.</p>
                    <h4 className={styles['sub-sub-section-title']}>Sharing of Face Data:</h4>
                    <p className={styles['paragraph']}>We do not share face data with any third parties. The information is strictly used for internal analytics and service optimization purposes. We respect the privacy of our users and do not disclose face data to external entities.</p>
                    <h4 className={styles['sub-sub-section-title']}>Retention of Face Data:</h4>
                    <p className={styles['paragraph']}>The uploaded image, generated output image, and generation parameters are retained for a limited period of time on our server. The retention period is 60 days, after which the face data is deleted from our system. The retention period allows us to analyze and improve our app's functionality while ensuring that data is not stored longer than necessary.</p>

                    <h3 className={styles['sub-section-title']}>Data Retention</h3>
                    <p className={styles['paragraph']}>The application may periodically collect images their textual descriptions, and their generation settings solely for analytics and diagnostic purposes. The collected data is not shared with third parties and is solely used to improve the application's performance. To maintain privacy and minimize storage requirements, data is retained for 60 days and then deleted. This policy ensures compliance with data protection regulations and safeguards user information. Users agree to this policy, acknowledging that their data if saved to disk will be periodically deleted.</p>

                    <h3 className={styles['sub-section-title']}>Request Deletion</h3>
                    <p className={styles['paragraph']}>Data when saved is automatically deleted after 60 days but if you want your data to be manually deleted, send me an email at <a href="mailto:jake@serverboi.org" className={styles['link']}>jake@serverboi.org</a>.</p>

                    <h3 className={styles['sub-section-title']}>Changes to Our Privacy Policy</h3>
                    <p className={styles['paragraph']}>We reserve the right to modify or update this Privacy Policy at any time. Continued use of the app after the effective date of any changes to this Privacy Policy constitutes your acceptance of the changes.</p>

                    <h3 className={styles['sub-section-title']}>Contact Us</h3>
                    <p className={styles['paragraph']}>If you have any questions or concerns about this Privacy Policy, please contact me at <a href="mailto:jake@serverboi.org" className={styles['link']}>jake@serverboi.org</a>.</p>
                </div>
            </div>

            <Footer /> {/* Include Footer component outside of the page-container div */}
        </div>


    );
};

export default TermsOfServicePage;