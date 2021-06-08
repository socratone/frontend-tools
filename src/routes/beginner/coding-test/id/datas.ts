const datas = [
  {
    id: 'basic-1',
    category: 'basic',
    title: 'sum',
    question: 'a와 b를 더하는 sum 함수를 만드세요.',
    rate: 1,
    defaultCode: `function sum(a, b) {

}`,
    tests: [
      { message: '1 + 2는 3이어야 합니다.', if: 'sum(1, 2) === 3' },
      { message: '3 + 2는 5이어야 합니다.', if: 'sum(3, 2) === 5' },
      { message: '1 + 4는 5이어야 합니다.', if: 'sum(1, 4) === 5' },
    ],
    hint: '없습니다.',
  },
  {
    id: 'basic-2',
    category: 'basic',
    title: 'subtract',
    question: 'a에서 b를 빼는 subtract 함수를 만드세요.',
    rate: 1,
    defaultCode: `function subtract(a, b) {

}`,
    tests: [
      { message: '1 - 2는 -1이어야 합니다.', if: 'subtract(1, 2) === -1' },
      { message: '3 - 2는 1이어야 합니다.', if: 'subtract(3, 2) === 1' },
      { message: '1 - 4는 -3이어야 합니다.', if: 'subtract(1, 4) === -3' },
    ],
    hint: '없습니다.',
  },
  {
    id: 'basic-3',
    category: 'basic',
    title: 'getGrade',
    question: "90 이상일 때 '수', 80 이상일 때 '우', 70 이상일 때 '미', 60 이상일 때 '양', 나머지는 '가'를 return하는 함수를 만드세요.",
    rate: 2,
    defaultCode: `function getGrade(number) {

}`,
    tests: [
      { message: "100은 &apos;수&apos;여야 합니다.", if: "getGrade(100) === '수'" },
      { message: "90은 &apos;수&apos;여야 합니다.", if: "getGrade(90) === '수'" },
      { message: "89는 &apos;우&apos;여야 합니다.", if: "getGrade(89) === '우'" },
      { message: "80은 &apos;우&apos;여야 합니다.", if: "getGrade(80) === '우'" },
      { message: "79는 &apos;미&apos;여야 합니다.", if: "getGrade(79) === '미'" },
      { message: "70은 &apos;미&apos;여야 합니다.", if: "getGrade(70) === '미'" },
      { message: "69는 &apos;양&apos;이어야 합니다.", if: "getGrade(69) === '양'" },
      { message: "60은 &apos;양&apos;이어야 합니다.", if: "getGrade(60) === '양'" },
      { message: "59는 &apos;가&apos;여야 합니다.", if: "getGrade(59) === '가'" },
      { message: "30은 &apos;가&apos;여야 합니다.", if: "getGrade(30) === '가'" },
      { message: "0은 &apos;가&apos;여야 합니다.", if: "getGrade(0) === '가'" },
    ],
    hint: 'if else문을 이용하세요.',
  },
];

export default datas;
