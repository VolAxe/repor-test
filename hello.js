function greet(name = 'GitHub') {
  return `Hello, ${name}!`;
}

console.log(greet(process.argv[2]));
