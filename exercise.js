const isLogged = true;

function isLoggedIn(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let rand = Math.random();
      if (rand > 0.3) {
        resolve(userId);
      } else {
        reject(new Error("Not logged in!"));
      }
    }, 500);
  });
}

function getUserDetails(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0.5) {
        resolve({ name: "John", age: 24 });
      } else {
        reject(new Error("User Does not exist!"));
      }
    }, 500);
  });
}

function getUserName({ name, age }) {
  return `name: ${name}, age: ${age}`;
}

isLoggedIn(3)
  .then(getUserDetails)
  .then(getUserName)
  .then((name) => {
    console.log(name);
  })
  .catch((err) => {
    console.error(err);
  });
