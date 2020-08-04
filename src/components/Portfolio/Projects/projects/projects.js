import WeRun from '../../../../assets/img/we-run-here-desktop.jpg';
import Space from '../../../../assets/img/spaceinv-desktop.jpg';
import Covid from '../../../../assets/img/covid-tracking.gif';

const projects = [
  {
    title: 'Coronavirus Dashboard',
    img: {
      src: Covid,
      alt: 'Coronavirus Dashboard',
    },
    description:
      'A web app created to track the COVID-19 coronavirus pandemic in the United States. I developed this project because I wanted to create a web app that provides quick, straightforward access to current data relevant to the pandemic. The app displays an interactive graph which updates when a user changes the data or state selection and provides a list of coronavirus-related resources published by the CDC. In order to limit network activity the app also caches data after each new request.',
    caption:
      'A web app to find up-to-date data on the progression of the coronavirus pandemic in the U.S.',
    github: 'https://www.github.com/russ430/covid19-tracking',
    svgs: [
      {
        svg: 'd3',
        name: 'd3',
        color: '#f9a03c',
        size: '23',
        key: 'd3Covid',
        type: 'custom',
      },
      {
        svg: 'react',
        name: 'React',
        color: '#62dafd',
        size: '30',
        key: 'reactCovid',
      },
      {
        svg: 'redux',
        name: 'Redux',
        color: '#764ABC',
        size: '30',
        key: 'reduxCovid',
        type: 'custom',
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
      'I recreated the classic game Space Invaders using only vanilla JavaScript. Can you beat all 5 levels?',
    github: 'https://www.github.com/russ430/space-invaders',
    svgs: [
      {
        svg: 'javascript',
        name: 'JavaScript',
        color: '#f7d63d',
        size: '30',
        key: 'jsSpace',
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
    link: 'https://we-run-here.netlify.app',
  },
];

export default projects;
