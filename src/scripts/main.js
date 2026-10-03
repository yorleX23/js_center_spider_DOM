'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const spiderTop = (wall.offsetHeight - spider.offsetHeight) / 2;
const spiderLeft = (wall.offsetWidth - spider.offsetWidth) / 2;

spider.style.top = `${spiderTop}px`;
spider.style.left = `${spiderLeft}px`;
