const datas = [
  {
    id: 'basic-1',
    category: 'basic',
    title: 'sum',
    question: 'a와 b를 더하는 sum 함수를 만드세요.',
    defaultCode: `function sum(a, b) {

}`,
    tests: [
      { message: '1 + 2는 3이어야 합니다.', if: 'sum(1, 2) === 3' },
      { message: '3 + 2는 5이어야 합니다.', if: 'sum(3, 2) === 5' },
      { message: '1 + 4는 5이어야 합니다.', if: 'sum(1, 4) === 5' },
    ],
    hint: '없습니다.'
  },
  {
    id: 'basic-2',
    category: 'basic',
    title: 'subtract',
    question: 'a에서 b를 빼는 subtract 함수를 만드세요.',
    defaultCode: `function subtract(a, b) {

}`,
    tests: [
      { message: '1 - 2는 -1이어야 합니다.', if: 'subtract(1, 2) === -1' },
      { message: '3 - 2는 1이어야 합니다.', if: 'subtract(3, 2) === 1' },
      { message: '1 - 4는 -3이어야 합니다.', if: 'subtract(1, 4) === -3' },
    ],
    hint: '없습니다.'
  },
];

export default datas;