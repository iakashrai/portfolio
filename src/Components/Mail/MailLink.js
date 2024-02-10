import React from 'react';
import './MailLink.css'; // Importing the CSS file

const MailLink = ({ email }) => {
    const mailtoLink = `mailto:${email}`;

    return (
        <a href={mailtoLink} className="mail-link">
            Send Email
        </a>
    );
};

export default MailLink;
