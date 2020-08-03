import WeRun from '../../../../assets/img/we-run-here-desktop.jpg';
import Space from '../../../../assets/img/spaceinv-desktop.jpg';
import Covid from '../../../../assets/img/covid-tracking.gif';

const projects = [
  {
    title: 'Coronavirus Dashboard',
    img: {
      src: Covid,
      alt: 'Space Invaders Project',
    },
    description:
      'A web app created to track the COVID-19 coronavirus pandemic in the United States. I developed this project because I wanted to create a web app that provides quick, straightforward access to current data relevant to the pandemic. The app displays an interactive graph which updates when a user changes the data or state selection and provides a list of coronavirus-related resources published by the CDC. In order to limit network activity the app also caches data after each new request.',
    caption:
      'A web app to find up-to-date data on the progression of the coronavirus pandemic in the U.S.',
    github: 'https://www.github.com/russ430/covid19-tracking',
    svgs: [
      {
        svg: 'react',
        name: 'React',
        color: '#62dafd',
        size: '30',
        key: 'covid',
      },
    ],
    link: 'https://us-coronavirus-tracking.netlify.app',
  },
  {
    title: 'Space Invaders',
    img: {
      src: Space,
      alt: 'Space Invaders Project',
    },
    description:
      'In order to sharpen my JavaScript skills I wanted to challenge myself to build a project without using any external libraries. I landed on recreating the classic computer game Space Invaders and implemented up to 5 levels. The player has 3 lives per level and the levels progress in difficulty as each one is passed.',
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
    title: 'We Run Here',
    img: {
      src: WeRun,
      alt: 'Basic Weather App project',
    },
    description:
      "A mock social networking web app built for the running community. Users can choose an avatar, post/delete their running times, and can comment/like other users' posts. Each profile displays stats and personal bests which are calculated and updated after each new post. Posts from others in the community are displayed in a Twitter-esque live feed on the user's home page.",
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
  // {
  //   project: 'Weather App',
  //   key: 'Weather',
  //   svgKey: 'weatherSvg',
  //   instaKey: 'weatherInsta',
  //   img: {
  //     src: Weather,
  //     alt: 'Basic Weather App project',
  //   },
  //   description:
  //     "A full stack single page weather application built with React on the front end and NodeJs on the back end, deployed on Heroku. Weather data is queried from OpenWeather's API.",
  //   caption:
  //     "A full stack weather application built with React and NodeJs. I used OpenWeather's API to fetch all the current and future weather data.",
  //   github: 'https://www.github.com/russ430/basic-weather',
  //   svgs: [
  //     {
  //       svg: 'nodejs',
  //       name: 'NodeJs',
  //       color: '#395336',
  //       size: '30',
  //       key: 'nodeWeather',
  //     },
  //     {
  //       svg: 'react',
  //       name: 'React',
  //       color: '#62dafd',
  //       size: '30',
  //       key: 'reactWeather',
  //     },
  //     {
  //       svg: 'responsive',
  //       name: 'Responsive',
  //       color: '#000',
  //       size: '30',
  //       key: 'responsiveWeather',
  //     },
  //   ],
  //   link: 'https://alexs-basic-weather-app.herokuapp.com/',
  // },
];

export default projects;
