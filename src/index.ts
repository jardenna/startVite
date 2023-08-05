const greetName = (name = 'Helle') => {
  if (name) {
    console.log(name);
  }
};

greetName(Math.random() > 0.5 ? 'name' : 'Test');
const hello = 'World is great!';

export default hello;
