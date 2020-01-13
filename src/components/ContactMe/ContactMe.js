import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PageHeader from '../utils/PageHeader/PageHeader';
import * as colors from '../../UI/colors/colors';
import { boxShadowSmall } from '../../UI/boxShadow/boxShadow';

const Content = styled.div`
  background-color: ${colors.white};
  overflow: hidden;
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
  const [nameData, changeNameData] = useState('');
  const [emailData, changeEmailData] = useState('');
  const [messageData, changeMessageData] = useState('');

  const onNameChangeHandler = event => {
    changeNameData(event.target.value);
  };

  const onEmailChangeHandler = event => {
    changeEmailData(event.target.value);
  };

  const onMessageChangeHandler = event => {
    changeMessageData(event.target.value);
  };

  const resetForm = () => {
    changeNameData('');
    changeEmailData('');
    changeMessageData('');
  };

  const submitFormHandler = event => {
    event.preventDefault();

    axios({
      method: 'POST',
      url: 'http://localhost:3002/send',
      data: {
        name: nameData,
        email: emailData,
        message: messageData,
      },
    }).then(response => {
      if (response.data.status === 'success') {
        alert('Message sent');
        resetForm();
      } else if (response.data.status === 'fail') {
        alert('Message failed to send');
      }
    });
  };

  return (
    <>
      <PageHeader subHeading="Please fill out the form below and I will get back to you within 48 hours">
        Contact Me
      </PageHeader>
      <Content>
        <Form>
          <Label Htmlfor="name">Name</Label>
          <Input type="text" id="name" value={nameData} onChange={e => onNameChangeHandler(e)} />
          <Label Htmlfor="email">Email</Label>
          <Input
            type="email"
            id="email"
            value={emailData}
            onChange={e => onEmailChangeHandler(e)}
          />
          <Label Htmlfor="message">Message</Label>
          <TextArea id="message" value={messageData} onChange={e => onMessageChangeHandler(e)} />
          <Button type="submit" onClick={submitFormHandler}>
            Submit
          </Button>
        </Form>
      </Content>
    </>
  );
};

export default ContactMe;
