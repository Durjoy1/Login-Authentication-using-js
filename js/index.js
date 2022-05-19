const getUserInfo = () => {
  return JSON.parse(localStorage?.getItem('user'));
};

const user = getUserInfo();
if (user) {
  let users = JSON.parse(localStorage?.getItem('users'));
  const foundUser = users.find(
    (_user) => _user.username === user.username
  );
  if (!foundUser) {
    alert('Not logged in');
    window.location.href = '/login.html';
  } else if (foundUser.password !== user.password) {
    alert('Not logged in');
    window.location.href = '/login.html';
  } else {
    const container = document.querySelector('.container');

    const userInfo = `
    <h1 class="display-4">Hello, ${getUserInfo().fullName}</h1>
    <p class="lead">
                <button id="logout" class="btn btn-primary btn-lg" href="#" role="button">Logout</button>
            </p>
    `;
    container.innerHTML = userInfo;
  }
} else {
  window.location.href = '/login.html';
}
const logoutButton = document?.querySelector('button#logout');
logoutButton?.addEventListener('click', () => {
  localStorage.removeItem('user');
  window.location.href = '/login.html';
});
