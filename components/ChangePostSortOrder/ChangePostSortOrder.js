import drawBlogPosts from '../drawBlogPosts/drawBlogPosts.js';
import {
  SortAscending,
  SortDescending,
} from '../PostsSortByDate/PostsSortByDate.js';

//behavior of change odrer button
export default function ChangePostSortOrder() {
  let order = 'descending';
  SortDescending();

  const changeSortOrderBtn = document.querySelector('.sort-btn');

  changeSortOrderBtn.addEventListener('click', () => {
    if (order === 'ascending') {
      changeSortOrderBtn.innerText = 'Sort ascending';
      order = 'descending';
      SortDescending();
      drawBlogPosts();
    } else {
      changeSortOrderBtn.innerText = 'Sort descending';
      order = 'ascending';
      SortAscending();
      drawBlogPosts();
    }
  });
}
