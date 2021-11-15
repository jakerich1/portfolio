import { React } from 'react';
import {
  ContactWrap, ContactCard, CardHead, Submit, CardBody, Input, Comment,
} from './Contact.style';

function Contact() {
  return (
    <ContactWrap justify="center" align="center" height="100vh">
      <ContactCard column>
        <CardHead justify="center" align="center" padding="0.5em">
          Get In Contact
        </CardHead>
        <CardBody align="flex-start" column gap="1em" padding="2em">
          <Input placeholder="Name" />
          <Input placeholder="Email" />
          <Comment placeholder="Write your message here..." />
          <Submit>Submit</Submit>
        </CardBody>
      </ContactCard>
    </ContactWrap>
  );
}

export default Contact;
