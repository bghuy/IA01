const newsContainer = document.querySelector('.news');
const newsData = [];

// Tạo 5 phần tử với tiêu đề và nội dung tương ứng
for (let i = 1; i <= 4; i++) {
    const newsItem = {
        title: `NEWS${i}`,
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Expedita asperiores dicta dolorum veniam placeat voluptatibus aut fuga animi rerum, dolore quidem voluptatum repudiandae?
        Impedit quo rerum eum nulla, non ipsam!`,
    };
    newsData.push(newsItem);
}
const headerMenuContainer = document.querySelector('.header .nav-bar');
function createMenuElement(container) {
    for (let i = 1; i <= 5; i++) {
        const newsElement = document.createElement('div');
        newsElement.classList.add('menu');
        newsElement.textContent = `Menu${i}`;
        container.appendChild(newsElement);
    }
    container.style.width = '80%';
    container.style.padding = '0px 5px';
}


function createNewsElement(title, content) {
    const newsElement = document.createElement('div');
    newsElement.classList.add('news-element');

    const titleElement = document.createElement('span');
    titleElement.classList.add('news-header');
    titleElement.style.backgroundColor = 'orange';
    titleElement.style.display = 'flex';
    titleElement.style.alignItems = 'center';

    const arrowLeftElement = document.createElement('span');
    arrowLeftElement.classList.add('arrow-left');
    arrowLeftElement.textContent = '↓';
    arrowLeftElement.style.cursor = 'pointer';

    titleElement.appendChild(arrowLeftElement);

    const titleTextElement = document.createElement('span');
    titleTextElement.textContent = title;

    titleElement.appendChild(titleTextElement);


    const arrowRightElement = document.createElement('span');
    arrowRightElement.classList.add('arrow-right');
    arrowRightElement.textContent = '↕';
    arrowRightElement.style.cursor = 'pointer';
    titleElement.appendChild(arrowRightElement);
    titleElement.style.justifyContent = 'space-between';
    titleElement.style.color = 'white';

    const contentElement = document.createElement('div');
    const paragraphElement = document.createElement('p');
    paragraphElement.textContent = content;
    paragraphElement.style.width = 'inherit';
    contentElement.appendChild(paragraphElement);

    contentElement.style.display = 'block';

    arrowLeftElement.addEventListener('click', function () {
        if (contentElement.style.display === 'none') {
            titleElement.firstChild.textContent = '↓'
            contentElement.style.display = 'block';
            titleElement.style.color = 'white';
            titleElement.classList.remove('inactive');

        }
        else {
            contentElement.style.display = 'none';
            titleElement.classList.add('inactive');
            titleElement.firstChild.textContent = '▶'
            titleElement.style.color = 'black';

        }
    });

    newsElement.appendChild(titleElement);
    newsElement.appendChild(contentElement);
    return newsElement;
}



newsData.forEach((data) => {
    const newsElement = createNewsElement(data.title, data.content);
    newsContainer.appendChild(newsElement);
});
createMenuElement(headerMenuContainer);