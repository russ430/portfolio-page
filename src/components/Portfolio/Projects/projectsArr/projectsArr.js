import Vanderveer from '../../../../assets/img/vm-desktop.png';
import Weather from '../../../../assets/img/weather-desktop.png';
import Portfolio from '../../../../assets/img/portfolio-desktop.jpg';
import WeRun from '../../../../assets/img/we-run-here-desktop.jpg';

const projects = [
  {
    project: 'We Run Here',
    key: 'WeRunHere',
    svgKey: 'weRunHereSVG',
    instaKey: 'weRunInsta',
    img: {
      src: WeRun,
      alt: 'Basic Weather App project',
    },
    description:
      "A full stack CRUD web application built with the MERN stack utilizing GraphQL/Apollo. Users choose an avatar, post/delete their running times, and can comment/like posts. Their profile displays stats and personal bests which are calculated and updated. New posts are displayed in a live feed on users' home page.",
    caption:
      'A full stack CRUD social networking web app for runners built with the MERN stack utilizing GraphQL/Apollo.',
    github: 'https://www.github.com/russ430/running-times-app',
    svgs: [
      {
        svg: 'nodejs',
        name: 'NodeJs',
        color: '#395336',
        size: '30',
        key: 'nodeRun',
      },
      {
        svg: 'react',
        name: 'React',
        color: '#62dafd',
        size: '30',
        key: 'reactRun',
      },
    ],
    link: 'https://we-run-here.netlify.com',
  },
  {
    project: 'Weather App',
    key: 'Weather',
    svgKey: 'weatherSvg',
    instaKey: 'weatherInsta',
    img: {
      src: Weather,
      alt: 'Basic Weather App project',
    },
    description:
      "A full stack single page weather application built with React on the front end and NodeJs on the back end, deployed on Heroku. Weather data is retrieved from OpenWeather's API.",
    caption:
      "A full stack weather application built with React and NodeJs. I used OpenWeather's API to fetch all the current and future weather data.",
    github: 'https://www.github.com/russ430/basic-weather',
    svgs: [
      {
        svg: 'nodejs',
        name: 'NodeJs',
        color: '#395336',
        size: '30',
        key: 'nodeWeather',
      },
      {
        svg: 'react',
        name: 'React',
        color: '#62dafd',
        size: '30',
        key: 'reactWeather',
      },
      {
        svg: 'responsive',
        name: 'Responsive',
        color: '#000',
        size: '30',
        key: 'responsiveWeather',
      },
    ],
    link: 'https://alexs-basic-weather-app.herokuapp.com/',
  },
  {
    project: 'Portfolio Page',
    key: 'Portfolio',
    svgKey: 'portfolioSvg',
    instaKey: 'portfolioInsta',
    img: {
      src: Portfolio,
      alt: 'Portfolio page project',
    },
    description:
      'The portfolio page that you are currently on was built from scratch using React. It is a single page application with a multi-page feel utilizing React Router to render new pages and styled-components for styling. Deployed on Netlify.',
    caption:
      'My portfolio page was developed as a single page application but has a multi-page feel thanks to the JavaScript library, React.',
    github: 'https://www.github.com/russ430/portfolio-page',
    svgs: [
      {
        svg: 'react',
        name: 'React',
        color: '#62dafd',
        size: '30',
        key: 'reactPortfolio',
      },
      {
        svg: 'responsive',
        name: 'Responsive',
        color: '#000',
        size: '30',
        key: 'responsivePortfolio',
      },
    ],
    link: 'https://alexrussian.com/',
  },
  {
    project: 'Vanderveer Motors',
    key: 'VM',
    svgKey: 'VMsvg',
    instaKey: 'vmInsta',
    img: {
      src: Vanderveer,
      alt: 'Vanderveer Motors project',
    },
    description:
      'A multi-page website created and hosted on WordPress. Fully responsive across all devices and cross-browser compatible. Includes email-based contact/message form and Google Maps integration.',
    caption:
      "A new WordPress website for a local mechanic's shop! Fully responsive and complete with a contact form and Google Maps integration.",
    svgs: [
      {
        svg: 'wordpress',
        name: 'Wordpress',
        color: '#21759a',
        size: '30',
        key: 'wordpressVM',
      },
      {
        svg: 'responsive',
        name: 'Responsive',
        color: '#000',
        size: '30',
        key: 'responsiveVM',
      },
    ],
    link: 'http://www.vanderveermotors.com',
  },
];

export default projects;
