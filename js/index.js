const getUserInfo = () => {
  return JSON.parse(localStorage?.getItem('user'));
};
const isLoggedIn = () => {
  return JSON.parse(localStorage?.getItem('isLoggedIn'));
};

if (isLoggedIn()) {
  const container = document.querySelector('.container');

  const userInfo = `
    <h1 class="display-4">Hello, ${getUserInfo().fullName}</h1>
    <p class="lead">
                <button id="logout" class="btn btn-primary btn-lg" href="#" role="button">Logout</button>
            </p>
    `;
  container.innerHTML = userInfo;
} else {
  window.location.href = '/login.html';
}
const logoutButton = document?.querySelector('button#logout');
logoutButton?.addEventListener('click', () => {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('user');
  window.location.href = '/login.html';
});
