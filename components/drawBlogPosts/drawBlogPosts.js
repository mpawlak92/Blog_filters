import { filteredAvailableItems } from '../../js/main.js';

//dinamicly render all posts from json file
export default function drawBlogPosts() {
  const container = document.querySelector('.container');
  container.innerHTML = '';
  filteredAvailableItems.forEach((post) => {
    const postCard = document.createElement('div');
    postCard.classList.add('postCard');
    postCard.innerHTML = `
        <div class="postCard__img"> <img
          class="articleNoImg"
          src='../../assets/no-image.png'
          alt="default article image"
        ></img></div>
        <div class='postCard__container'> 
          <h4 class="postCard__title">${post.title}</h4>
          <div class="postCard__PublishedDate">
            Published date: ${post.date}
          </div>
          <div class="postCard__content">
              <p>${post.content}</p>
        </div>
        <div class="postCard__overlay"></div>
        </div>
    `;
    container.appendChild(postCard);
  });
}
