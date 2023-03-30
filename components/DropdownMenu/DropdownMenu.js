import CategoryFilter from '../CategoryFilter/CategoryFilter.js';
import drawBlogPosts from '../drawBlogPosts/drawBlogPosts.js';
import DateRangeFilter from '../DateRangeFilter/DateRangeFilter.js';
import { rangepicker } from '../../js/main.js';

import data from '../../data.json' assert { type: 'json' };
//functin get all category from posts and delete duplicates
const selectUniqueCategory = () => {
  const allCategory = data.map((post) => {
    return post.category;
  });
  //deleting duplicates
  let uniqueCategory = [...new Set(allCategory)];
  return uniqueCategory;
};

//dropdown menu handle
export default function DropdownMenu() {
  const uniqueCategory = selectUniqueCategory();

  const select = document.querySelector('.select');
  const caret = document.querySelector('.caret');
  const menu = document.querySelector('.menu');
  const selected = document.querySelector('.selected');

  //add unique category as dropdown menu options
  uniqueCategory.map((category) => {
    const option = document.createElement('div');
    option.innerHTML = `${category}`;
    menu.appendChild(option);
  });

  //set behavior of dropdown btn like open and close menu rotate caret and change "flag"
  select.addEventListener('click', () => {
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
  });

  const options = document.querySelectorAll('.menu div');
  // behavior on click every single option on dropdown list
  options.forEach((option) => {
    option.addEventListener('click', () => {
      selected.innerText = option.innerText;
      select.classList.remove('select-clicked');
      caret.classList.remove('caret-rotate');
      menu.classList.remove('menu-open');
      options.forEach((option) => {
        option.classList.remove('active');
      });
      option.classList.add('active');

      CategoryFilter(option.textContent);

      const startDate = rangepicker.inputs[0].datepicker.dates[0];
      const endDate = rangepicker.inputs[1].datepicker.dates[0];
      DateRangeFilter(startDate, endDate);

      drawBlogPosts();
    });
  });

  drawBlogPosts();
}
