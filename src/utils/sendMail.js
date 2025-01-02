import emailjs from '@emailjs/browser';

const sendMail = async (name, email, message) => {
    try {

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
          };

        const info = await emailjs.send('service_ba510um', 'template_f7vtatr', templateParams, {
          publicKey: 'ZTjXKTUWTsYwHuD1c',
        })
        console.log("Email sent successfully!", info);
        return true;
    } catch (error) {
        console.error("Error sending email:", error);
        return false;
    }
}

export default sendMail;