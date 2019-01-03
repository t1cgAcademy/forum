import axios from 'axios';

test('Truth Test', () => {
  expect(true).toBeTruthy();
});

test('False Test', () => {
  expect(false).toBeFalsy();
});

const add = (num1, num2) => {
  return num1 + num2;
};

// test('Tests our add function incorrectly', () => {
//   expect(add(2, 3)).toBe(4);
// });

test('Tests not', () => {
  expect(add(2, 3)).not.toBe(100);
});

const isNull = () => {
  return null;
};

test('Tests isNull function', () => {
  expect(isNull()).toBeNull();
});

const createUser = () => {
  const user = { firstName: 'John', lastName: 'Doe' };
  return user;
};

// Use toEqual rather than toBe
test('User should be John Doe', () => {
  expect(createUser()).toEqual({ firstName: 'John', lastName: 'Doe' });
});

// Less than and greater than
test('Should be above 100', () => {
  const x = 50;
  const y = 60;
  expect(x + y).toBeGreaterThan(100);
});

// Regex
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

// Arrays
test('Admin in usernames', () => {
  const usernames = [('John', 'Jane', 'Admin')];
  expect(usernames).toContain('Admin');
});

// Integration Test
export const total = (tip, subTotal) => {
  return '$' + add(tip, subTotal);
};

test('total', () => {
  expect(total(5, 10)).toBe('$15');
});

// Fetch data
const fetchUser = () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data)
    .catch(err => 'error');
};

// Working with async data
// Promise
test('User fetched name should be Leanne Graham', () => {
  expect.assertions(1);
  return fetchUser().then(data => {
    expect(data.name).toEqual('Leanne Graham');
  });
});

// Async Await
test('AA User fetched name should be Leanne Graham', async () => {
  expect.assertions(1);
  const data = await fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});

// Mock
const addNums = jest.fn(() => 4);

test('Tests our add function', () => {
  expect(addNums(2, 2)).toBe(4);
  expect(addNums).toHaveBeenCalledTimes(1);
  expect(addNums).toHaveBeenCalledWith(2, 2);
});

const reverseString = str => {
  return str
    .toLowerCase()
    .split('')
    .reverse()
    .join('');
};

test('Function exists', () => {
  expect(reverseString).toBeDefined();
});

test('String reverses with uppercase', () => {
  expect(reverseString('Hello')).toEqual('olleh');
});

const formatStr = str => {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
};

const isAnagram = (str1, str2) => {
  return formatStr(str1) === formatStr(str2);
};

test('isAnagram function exists', () => {
  expect(typeof isAnagram).toEqual('function');
});

test('isAnagram elbow below', () => {
  expect(isAnagram('elbow', 'below')).toBeTruthy();
});

// Run before or after test

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// const initDatabase = () => {
//   console.log('Database intialized');
// };

// const closeDatabase = () => {
//   console.log('Database closed');
// };
