import { React, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import {
  ContactWrap, ContactCard, CardHead, Submit, CardBody, Form, Input, Comment, Success, Icon,
} from './Contact.style';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [valid, setValid] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!submitting) {
      setSubmitting(true);
      setValid(true);

      if (valid) {
        console.log('test');
        setSubmitted(true);
      }
    }
  };

  return (
    <ContactWrap justify="center" align="center" height="100vh">
      <ContactCard column>
        <CardHead justify="center" align="center" padding="0.5em">
          Get In Contact
        </CardHead>
        <CardBody padding="2em">
          <Form onSubmit={handleSubmit}>
            <Input required minlength="1" maxlength="2000" value={name} type="text" onChange={(e) => { setName(e.target.value); }} placeholder="Name" />
            <Input required minlength="1" maxlength="2000" value={email} type="email" onChange={(e) => { setEmail(e.target.value); }} placeholder="Email" />
            <Comment required minlength="1" maxlength="6000" value={comment} onChange={(e) => { setComment(e.target.value); }} placeholder="Write your message here..." />
            {submitted
              ? (
                <Success>
                  Submitted
                  {' '}
                  <Icon size={24} color="white" stroke={2} strokeLinejoin="miter" />
                </Success>
              )
              : (
                <Submit type="submit">
                  {submitting ? '' : 'Submit'}
                  <ClipLoader color="white" loading={submitting} size={34} />
                </Submit>
              )}
          </Form>
        </CardBody>
      </ContactCard>
    </ContactWrap>
  );
}

export default Contact;
