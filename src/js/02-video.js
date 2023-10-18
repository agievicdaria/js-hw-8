import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORE_KEY = 'videoplayer-current-time';

const onPlay = function (data) {
  localStorage.setItem(STORE_KEY, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(localStorage.getItem(STORE_KEY)).catch(function (error) {
  console.log(error);
});
