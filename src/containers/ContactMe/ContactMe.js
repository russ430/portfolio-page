import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PageHeader from '../../utils/PageHeader/PageHeader';
import * as colors from '../../UI/colors/colors';
import { boxShadowSmall } from '../../UI/boxShadow/boxShadow';
import LoadingSpinner from '../../utils/LoadingSpinner/LoadingSpinner';

const Content = styled.div`
  background-color: ${colors.white};
  overflow: hidden;
  padding: 5rem 0;

  @media screen and (max-width: 545px) {
    padding: 0;
  }
`;

const Form = styled.form`
  max-width: 50rem;
  margin: 2rem auto;
  padding: 2rem 1.5rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 0.3rem;
  box-shadow: ${boxShadowSmall};

  @media screen and (max-width: 545px) {
    border-radius: 0;
    margin: 0 auto;
    box-shadow: none;
  }
`;

const FormSubmitted = styled(Form)`
  min-height: 40rem;
  text-align: center;
  align-items: center;
`;

const Input = styled.input`
  width: 90%:
  background-color: lightgrey;
  padding: 0.5rem 1rem;
  font-size: 2rem;
  margin: 0 0 1rem 0;
  border: 1px solid ${colors.greyMed};
`;

const TextArea = styled(Input)`
  height: 8rem;
`;

const Label = styled.label`
  font-size: 2rem;
  margin: 1rem 0 0.2rem 0;
`;

const Button = styled.button`
  font-family: inherit;
  font-size: 1.7rem;
  background-color: ${colors.primary};
  border: none;
  padding: 1rem 2rem;
  color: ${colors.white};
  margin: 1rem 0;
  align-self: flex-start;
`;

const ContactMe = () => {
  // const [nameData, changeNameData] = useState('');
  // const [emailData, changeEmailData] = useState('');
  // const [messageData, changeMessageData] = useState('');
  // const [messageSent, updateMessageSent] = useState(false);
  // const [loading, setLoading] = useState(false);

  // const onNameChangeHandler = event => {
  //   changeNameData(event.target.value);
  // };

  // const onEmailChangeHandler = event => {
  //   changeEmailData(event.target.value);
  // };

  // const onMessageChangeHandler = event => {
  //   changeMessageData(event.target.value);
  // };

  // const resetForm = () => {
  //   changeNameData('');
  //   changeEmailData('');
  //   changeMessageData('');
  // };

  // const submitFormHandler = event => {
  //   event.preventDefault();
  //   setLoading(true);
  //   axios({
  //     method: 'POST',
  //     url: 'http://localhost:3002/send',
  //     data: {
  //       name: nameData,
  //       email: emailData,
  //       message: messageData,
  //     },
  //   }).then(response => {
  //     if (response.data.status === 'success') {
  //       updateMessageSent(true);
  //       setLoading(false);
  //       resetForm();
  //     } else if (response.data.status === 'fail') {
  //       alert('Message failed to send');
  //     }
  //   });
  // };

  // let isLoading = null;

  // if (loading === true && messageSent === false) {
  //   isLoading = (
  //     <FormSubmitted>
  //       <LoadingSpinner />
  //     </FormSubmitted>
  //   );
  // }

  // let form = null;

  // if (messageSent === true && loading === false) {
  //   form = (
  //     <FormSubmitted>
  //       <h1 style={{ fontWeight: '400' }}>
  //         Thank you for reaching out to me! I'll be sure to get back to you as soon as I see your
  //         message.
  //       </h1>
  //     </FormSubmitted>
  //   );
  // } else if (messageSent === false && loading === true) {
  //   form = null;
  // } else {
  //   form = (
  //     <Form>
  //       <Label Htmlfor="name">Name</Label>
  //       <Input type="text" id="name" value={nameData} onChange={e => onNameChangeHandler(e)} />
  //       <Label Htmlfor="email">Email</Label>
  //       <Input type="email" id="email" value={emailData} onChange={e => onEmailChangeHandler(e)} />
  //       <Label Htmlfor="message">Message</Label>
  //       <TextArea id="message" value={messageData} onChange={e => onMessageChangeHandler(e)} />
  //       <Button type="submit" onClick={submitFormHandler}>
  //         Submit
  //       </Button>
  //     </Form>
  //   );
  // }

  return (
    <>
      <PageHeader subHeading="I look forward to hearing from you! I'll do my best to get back to you within 48 hours or less.">
        Contact Me
      </PageHeader>
      <Content>
        {/* {form}
        {isLoading} */}
        <form
          style={{
            maxWidth: '50rem',
            margin: '2rem auto',
            padding: '2rem 1.5rem',
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '0.3rem',
          }}
          name="contact"
          method="post"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label style={{ fontSize: '2rem', margin: '1rem 0 0.2rem 0' }}>
              Your Name:{' '}
              <input
                style={{
                  width: '90%',
                  backgroundColor: '#eee',
                  padding: '0.5rem 1rem',
                  fontSize: '2rem',
                  margin: '0 0 1rem 0',
                  border: '1px solid grey',
                }}
                type="text"
                name="name"
              />
            </label>
          </p>
          <p>
            <label style={{ fontSize: '2rem', margin: '1rem 0 0.2rem 0' }}>
              Your Email:{' '}
              <input
                style={{
                  width: '90%',
                  backgroundColor: '#eee',
                  padding: '0.5rem 1rem',
                  fontSize: '2rem',
                  margin: '0 0 1rem 0',
                  border: '1px solid grey',
                }}
                type="email"
                name="email"
              />
            </label>
          </p>
          <p>
            <label style={{ fontSize: '2rem', margin: '1rem 0 0.2rem 0' }}>
              Message:{' '}
              <textarea
                style={{
                  width: '90%',
                  backgroundColor: '#eee',
                  padding: '0.5rem 1rem',
                  fontSize: '2rem',
                  margin: '0 0 1rem 0',
                  border: '1px solid grey',
                }}
                name="message"
              />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </Content>
    </>
  );
};

export default ContactMe;
