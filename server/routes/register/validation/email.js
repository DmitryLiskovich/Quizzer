const email = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const password = (p1, p2) => p1 === p2 && p1 !== '' && p2 !== '';

const required = (value) => !!value;

const passFull = (val) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g.test(val);

module.exports = {password, required, email, passFull}