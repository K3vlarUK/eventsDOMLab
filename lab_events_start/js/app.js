document.addEventListener('DOMContentLoaded', () => {

  const handleFormInput = function(event) {
    event.preventDefault();
    const newListItem = document.createElement('ul');
    const newTitle = document.createElement('li')
    newTitle.textContent = `${event.target.title.value}`;
    const newAuthor = document.createElement('li');
    newAuthor.textContent = `${event.target.author.value}`;
    const newCategory = document.createElement('li');
    newCategory.textContent = `${event.target.category.value}`;

    const newReadingItem = document.querySelector('#reading-list')
    newReadingItem.appendChild(newListItem);

    newListItem.appendChild(newTitle);
    newListItem.appendChild(newAuthor);
    newListItem.appendChild(newCategory);
    // const readingList = document.querySelector('#reading-list');
    // readingList.appendChild
    formInput.reset();
  }

  const formInput = document.querySelector('#new-item-form');
  formInput.addEventListener('submit', handleFormInput);

  const clearList = function () {
    const divClear = document.querySelector('#reading-list');
    divClear.innerHTML = "";
  }

  const deleteButton = document.querySelector('#button');
  deleteButton.addEventListener('click', clearList);

  console.log('JavaScript loaded');
})
