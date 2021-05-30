const datas = [
  {
    id: 1,
    question: 'a와 b를 더한 값을 반환하는 sum 함수를 만드세요.',
    defaultCode: `function sum(a, b) {

}`,
    tests: [
      { message: '1 + 2는 3이어야 합니다.', if: 'sum(1, 2) !== 3' },
      { message: '3 + 2는 5이어야 합니다.', if: 'sum(3, 2) !== 5' },
      { message: '1 + 4는 5이어야 합니다.', if: 'sum(1, 4) !== 5' },
      {
        message: '숫자 하나만 넣었을 때 숫자 하나의 값을 반환해야 합니다.',
        if: 'sum(1) !== 1',
      },
    ],
  },
  {
    id: 2,
    question: 'a와 b를 뺀 값을 반환하는 subtract 함수를 만드세요.',
    defaultCode: `function subtract(a, b) {

}`,
    tests: [
      { message: '1 - 2는 -1이어야 합니다.', if: 'subtract(1, -2) !== -1' },
      { message: '3 - 2는 1이어야 합니다.', if: 'subtract(3, -2) !== 1' },
      { message: '1 - 4는 -3이어야 합니다.', if: 'subtract(1, -4) !== -3' },
      {
        message: '숫자 하나만 넣었을 때 숫자 하나의 값을 반환해야 합니다.',
        if: 'subtract(1) !== 1',
      },
    ],
  },
];

export default datas;