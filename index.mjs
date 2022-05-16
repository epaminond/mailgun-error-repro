import formData from 'form-data';
import Mailgun from 'mailgun.js';

const { MAILGUN_API_KEY, MAILGUN_DOMAIN } = process.env;
const mailgun = new Mailgun(formData);

const sendMail = () => {
  const htmlEmailOptions = {
    from: 'some@email.com',
    to: ['some@email.com'],
    subject: 'Test MG',
    html: 'Hello!',
  };
  return mailgun.client({ username: 'api', key: MAILGUN_API_KEY }).messages.create(MAILGUN_DOMAIN, htmlEmailOptions)
    .then((res) => console.log('Email sent, Mailgun response: ', res))
    .catch((err) => console.error(err));
}

sendMail();
