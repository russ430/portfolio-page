import React from 'react';
import styled from 'styled-components';
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

const Contact = () => (
  <>
    <PageHeader subHeading="I look forward to hearing from you! I'll do my best to get back to you within 48 hours or less.">
      Contact Me
    </PageHeader>
    <Content>
      <Form action="/" name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <Label Htmlfor="name">Name</Label>
        <Input type="text" id="name" />
        <Label Htmlfor="email">Email</Label>
        <Input type="email" id="email" />
        <Label Htmlfor="message">Message</Label>
        <TextArea id="message" />
        <Button type="submit">Submit</Button>
      </Form>
    </Content>
  </>
);

export default Contact;

{
  /* <form
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
        </form> */
}