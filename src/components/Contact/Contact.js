import React, { useState } from 'react';
import styled from 'styled-components';
import ReCAPTCHA from 'react-google-recaptcha';
import PageHeader from '../../utils/PageHeader/PageHeader';
import * as colors from '../../UI/colors/colors';
import { boxShadowSmall } from '../../UI/boxShadow/boxShadow';

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

const Robot = styled.p`
  font-size: 1.5rem;
  font-style: italic;
  margin: 1rem 0;
`;

const Contact = () => {
  const [isHuman, setIsHuman] = useState(false);

  const recaptchaChangeHandler = value => {
    if (value) {
      setIsHuman(true);
    }
  };

  return (
    <>
      <PageHeader subHeading="I look forward to hearing from you! I'll do my best to get back to you within 48 hours or less.">
        Contact Me
      </PageHeader>
      <Content>
        <Form action="/" name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true">
          <input type="hidden" name="form-name" value="contact" />
          <Label Htmlfor="name">Name</Label>
          <Input type="text" id="name" name="name" />
          <Label Htmlfor="email">Email</Label>
          <Input type="email" id="email" name="email" />
          <Label Htmlfor="message">Message</Label>
          <TextArea id="message" name="message" />
          <ReCAPTCHA onChange={recaptchaChangeHandler} />
          {!isHuman && (
            <Robot>Please confirm you are not a Robot and a Submit button will appear</Robot>
          )}
          {isHuman && <Button type="submit">Submit</Button>}
        </Form>
      </Content>
    </>
  );
};

export default Contact;
