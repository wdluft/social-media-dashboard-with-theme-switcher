const themeToggle = document.querySelector('.themeSliderToggle__label');
console.log(themeToggle);
const body = document.body;

const toggleTheme = () => {
  if (body.classList.contains('lightTheme')) {
    body.classList.remove('lightTheme');
  } else {
    body.classList.add('lightTheme');
  }
};

themeToggle.addEventListener('click', toggleTheme);
