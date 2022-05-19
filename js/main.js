const users = [
  {
    username: 'johndoe@gmail.com',
    fullName: 'John Doe',
    password: '123456',
  },
  {
    username: 'durjoy@gmail.com',
    fullName: 'Durjoy Das',
    password: '123456',
  },
];
let result = {
  user: {},
  error: null,
};
const _users = localStorage?.getItem('users', JSON.stringify(users));
if (!_users) {
  localStorage?.setItem('users', JSON.stringify(users));
}
//Login Method
const loginForm = document.querySelector('#login-form');

loginForm?.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  let users = JSON.parse(localStorage?.getItem('users'));
  const foundUser = users.find((user) => user.username === username);
  if (!foundUser) {
    result = {
      ...result,
      error: 'Invalid username',
    };
  } else if (foundUser.password !== password) {
    result = {
      ...result,
      error: 'Wrong password',
    };
  } else {
    result = {
      ...result,
      user: {
        fullName: foundUser.fullName,
        username: foundUser.username,
      },
    };
    localStorage.setItem('user', JSON.stringify(result.user));
    localStorage.setItem('isLoggedIn', true);
  }
});

//Signup Method
const signupForm = document.querySelector('#signup-form');
signupForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  const fullName = document.querySelector('#full-name').value;
  const confirmPassword = document.querySelector(
    '#confirm-password'
  ).value;
  if (password !== confirmPassword) {
    result = {
      ...result,
      error: 'Password mismatched',
    };
  } else {
    let users = JSON.parse(localStorage?.getItem('users'));
    const foundUser = users.find(
      (user) => user.username === username
    );
    if (foundUser) {
      result = {
        ...result,
        error: 'Username is already taken',
      };
    } else {
      users.push({
        fullName,
        username,
        password,
      });

      localStorage.setItem('users', JSON.stringify(users));

      result = {
        ...result,
        user: {
          fullName,
          username,
        },
      };
      localStorage.setItem('user', JSON.stringify(result.user));
      localStorage.setItem('isLoggedIn', true);
    }
  }
});

const getUserInfo = () => {
  return JSON.parse(localStorage?.getItem('user'));
};
const isLoggedIn = () => {
  return JSON.parse(localStorage?.getItem('isLoggedIn'));
};
console.log(isLoggedIn());
if (isLoggedIn()) console.log(getUserInfo());
