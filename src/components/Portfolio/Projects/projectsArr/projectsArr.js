import Vanderveer from '../../../../assets/img/vm-desktop.png';
import Weather from '../../../../assets/img/weather-desktop.png';
import Portfolio from '../../../../assets/img/portfolio-desktop.jpg';
import WeRun from '../../../../assets/img/we-run-here-desktop.jpg';
import Space from '../../../../assets/img/spaceinv-desktop.jpg';

const projects = [
  {
    project: 'Space Invaders',
    key: 'SpaceInvaders',
    svgKey: 'spaceInvaders',
    instaKey: 'spaceInvaders',
    img: {
      src: Space,
      alt: 'Space Invaders Project',
    },
    description:
      'I wanted to try my hand at coding up a computer game and decided to recreate the classic Space Invaders game. I developed the game itself entirely with vanilla JavaScript and the HTML canvas. It has 5 levels that progress in difficulty as each level is passed.',
    caption:
      'I recreated the classic game Space Invaders using only vanilla JavaScript. See if you can beat all 5 levels!',
    github: 'https://www.github.com/russ430/space-invaders',
    svgs: [
      {
        svg: 'javascript',
        name: 'JavaScript',
        color: '#f7d63d',
        size: '30',
        key: 'javascript',
      },
    ],
    link: 'https://classicspaceinvaders.netlify.app',
  },
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
      "A mock social networking web app built for the running community. Users can choose an avatar, post/delete their running times, and can comment/like posts other users' posts. Each profile displays stats and personal bests which are calculated and updated after each new post. Posts from others in the community are displayed in a Twitter-esque live feed on the user's home page.",
    caption:
      'A mock social networking web app for the running community built with React and NodeJS.',
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
      "A full stack single page weather application built with React on the front end and NodeJs on the back end, deployed on Heroku. Weather data is queried from OpenWeather's API.",
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
];

export default projects;
