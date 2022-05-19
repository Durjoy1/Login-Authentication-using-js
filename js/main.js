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
const _users = JSON.parse(localStorage?.getItem('users'));
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
      error: 'Invalid username',
    };
  } else if (foundUser.password !== password) {
    result = {
      error: 'Wrong password',
    };
  } else {
    result = {
      user: {
        fullName: foundUser.fullName,
        username: foundUser.username,
        password,
      },
    };

    localStorage.setItem('user', JSON.stringify(result.user));
    window.location.href = '/';
  }
  result.error && alert(result.error);
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
      error: 'Password mismatched',
    };
  } else {
    let users = JSON.parse(localStorage?.getItem('users'));
    const foundUser = users.find(
      (user) => user.username === username
    );
    if (foundUser) {
      result = {
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
        user: {
          fullName,
          username,
          password,
        },
      };
      localStorage.setItem('user', JSON.stringify(result.user));
      window.location.href = '/';
    }
  }
  result.error && alert(result.error);
});
