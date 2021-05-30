const datas = [
  {
    id: 1,
    question: 'a와 b를 더한 값을 반환하는 sum 함수를 만드세요.',
    defaultCode: `function sum(a, b) {

}`,
    tests: [
      { message: '1 + 2는 3이어야 합니다.', if: 'sum(1, 2) !== 3' },
      { message: '1 + 4는 5이어야 합니다.', if: 'sum(1, 4) !== 5' },
      {
        message: '숫자 하나만 넣었을 때 숫자 하나의 값을 반환해야 합니다.',
        if: 'sum(1) !== 1',
      },
    ],
  },
];

export default datas;