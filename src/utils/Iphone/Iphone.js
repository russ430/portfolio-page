import React from 'react';
import styled from 'styled-components';

const Device = styled.div`
  display: inline-block;
  position: relative;
  box-sizing: content-box !important;
  width: 375px;
  height: 667px;
  padding: 105px 24px;
  background: #464646;
  border-radius: 56px;
  box-shadow: inset 0 0 3px 0 rgba(0, 0, 0, 0.7);

  &:before {
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    position: absolute;
    top: 6px;
    content: '';
    left: 6px;
    border-radius: 50px;
    background: #080808;
    z-index: 1;
  }

  &:after {
    width: calc(100% - 16px);
    height: calc(100% - 16px);
    position: absolute;
    top: 8px;
    content: '';
    left: 8px;
    border-radius: 48px;
    box-shadow: inset 0 0 3px 0 rgba(0, 0, 0, 0.1), inset 0 0 6px 3px #212121;
    z-index: 2;
  }
`;

const Bar = styled.div`
  height: 14px;
  background: #212121;
  position: absolute;
  top: 68px;
  left: 0;
`;

const Home = styled.div`
  border-radius: 100%;
  width: 68px;
  height: 68px;
  position: absolute;
  left: 50%;
  margin-left: -34px;
  bottom: 22px;
  z-index: 3;
  background: rgb(8, 8, 8);
  background: linear-gradient(
    135deg,
    rgba(8, 8, 8, 1) 0%,
    rgba(70, 70, 70, 1) 50%,
    rgba(8, 8, 8, 1) 100%
  );

  &:before {
    background: #080808;
    position: absolute;
    content: '';
    border-radius: 100%;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    top: 4px;
    left: 4px;
  }
`;

const Sleep = styled.div`
  position: absolute;
  top: 190px;
  right: -4px;
  width: 4px;
  height: 66px;
  border-radius: 0px 2px 2px 0px;
  background: #464646;
`;

const Volume = styled.div`
  position: absolute;
  left: -4px;
  top: 188px;
  z-index: 0;
  height: 66px;
  width: 4px;
  border-radius: 2px 0px 0px 2px;
  background: #464646;

  &:before {
    position: absolute;
    left: 2px;
    top: -78px;
    height: 40px;
    width: 2px;
    border-radius: 2px 0px 0px 2px;
    background: inherit;
    content: '';
    display: block;
  }

  &:after {
    position: absolute;
    left: 0px;
    top: 82px;
    height: 66px;
    width: 4px;
    border-radius: 2px 0px 0px 2px;
    background: inherit;
    content: '';
    display: block;
  }
`;

const Camera = styled.div`
  background: #3c3d3d;
  width: 12px;
  height: 12px;
  position: absolute;
  top: 24px;
  left: 50%;
  margin-left: -6px;
  border-radius: 100%;
  z-index: 3;
`;

const Sensor = styled.div`
  background: #3c3d3d;
  width: 16px;
  height: 16px;
  position: absolute;
  top: 49px;
  left: 134px;
  z-index: 3;
  border-radius: 100%;
`;

const Speaker = styled.div`
  background: #292728;
  width: 70px;
  height: 6px;
  position: absolute;
  top: 54px;
  left: 50%;
  margin-left: -35px;
  border-radius: 6px;
  z-index: 3;
`;

const Screen = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
  z-index: 3;
  background: white;
  overflow: hidden;
  display: block;
  border-radius: 1px;
  box-shadow: 0 0 0 3px #111;
`;

const Iphone = () => (
  <Device>
    <Bar />
    <Sleep />
    <Volume />
    <Camera />
    <Sensor />
    <Speaker />
    <Screen />
    <Home />
    <Bar />
  </Device>
);

export default Iphone;
