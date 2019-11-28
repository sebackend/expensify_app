const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add 2 numbers', () => {
  const result = add(3,4);
  expect(result).toBe(7);
});

test('should greeting with name', () => {
  const result = generateGreeting('Sebastian');
  expect(result).toBe('Hello Sebastian!');
});

test('should generate greeting for no name', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello Anonymous!');
});