import Vanderveer from '../../../../assets/img/vm-desktop.png';
import Weather from '../../../../assets/img/weather-desktop.png';
import CCForm from '../../../../assets/img/cc-form-desktop.png';

const projects = [
  {
    project: 'Vanderveer Motors',
    img: {
      src: Vanderveer,
      alt: 'Vanderveer Motors project',
    },
    description:
      'A multi-page website created and hosted on WordPress. Fully responsive across all devices and cross-browser compatible. Includes email-based contact/message form and Google Maps integration.',
    caption:
      "I recently built a website with WordPress for a local mechanic's shop! Fully responsive and complete with a contact form and Google Maps integration.",
    svgs: [
      {
        svg: 'wordpress',
        name: 'Wordpress',
        color: '#21759a',
        size: '30',
      },
      {
        svg: 'responsive',
        name: 'Responsive',
        color: '#000',
        size: '30',
      },
    ],
    link: 'http://www.vanderveermotors.com',
  },
  {
    project: 'Weather App',
    img: {
      src: Weather,
      alt: 'Basic Weather App project',
    },
    description:
      "A full stack single page weather application built with React on the front end and NodeJs on the back end, deployed on Heroku. Weather data is retrieved from OpenWeather's API.",
    caption:
      "A full stack weather application built with React and NodeJs. I used OpenWeather's API to fetch all the current and future weather data.",
    svgs: [
      {
        svg: 'nodejs',
        name: 'NodeJs',
        color: '#395336',
        size: '30',
      },
      {
        svg: 'react',
        name: 'React',
        color: '#62dafd',
        size: '30',
      },
      {
        svg: 'responsive',
        name: 'Responsive',
        color: '#000',
        size: '30',
      },
      {
        svg: 'github',
        name: 'Github Repository',
        color: '#000',
        size: '30',
      },
    ],
    link: 'https://alexs-basic-weather-app.herokuapp.com/',
  },
  {
    project: 'Credit Card Form',
    img: {
      src: CCForm,
      alt: 'Basic Weather App project',
    },
    description:
      'A simple credit card form built with React and Sass, deployed on Netlify. Shows card interactions when the user enters in their info.',
    caption:
      'A basic credit card form built with some cool interactions as the user types in their info. Built with React and Sass!',
    svgs: [
      {
        svg: 'react',
        name: 'React',
        color: '#62dafd',
        size: '30',
      },
      {
        svg: 'sass',
        name: 'Sass',
        color: '#f782ac',
        size: '30',
      },
      {
        svg: 'responsive',
        name: 'Responsive',
        color: '#000',
        size: '30',
      },
      {
        svg: 'github',
        name: 'Github Repository',
        color: '#000',
        size: '30',
      },
    ],
    link: 'https://credit-card-form.netlify.com',
  },
];

export default projects;
