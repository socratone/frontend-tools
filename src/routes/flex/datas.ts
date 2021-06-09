const solidSquares = `
section {
  border: 10px solid lightgrey;
}

div {
  background: dodgerblue;
  width: 40px;
  height: 40px;
}`;

const colorfullyRectangles = `
section {
  border: 10px solid lightgrey;
}

div {
  width: 80px;
  height: 40px;
}

div:nth-child(1),
div:nth-child(4) {
  background: dodgerblue;
}

div:nth-child(2),
div:nth-child(5) {
  background: gold;
}

div:nth-child(3),
div:nth-child(6) {
  background: deeppink;
}`;

const colorfullyFilledRectangle = `
section {
  border: 10px solid lightgrey;
}

div {
  height: 40px;
}

div:nth-child(1) {
  background: dodgerblue;
}

div:nth-child(2) {
  background: gold;
}

div:nth-child(3) {
  background: deeppink;
}`;

const tallParent = `
section {
  border: 10px solid lightgrey;
  height: 80px;
}

div {
  width: 40px;
  height: 40px;
}

div:nth-child(1) {
  background: dodgerblue;
}

div:nth-child(2) {
  background: gold;
}

div:nth-child(3) {
  background: deeppink;
}`;

const datas = [
  {
    title: 'justify-content: space-between;',
    markup: `<section class="parent">
  <div></div>
  <div></div>    
  <div></div>    
</section>`,
    hiddenCSS: solidSquares,
    css: `.parent {
  display: flex;
  justify-content: space-between;
}`,
  },
  {
    title: 'justify-content: space-around;',
    markup: `<section class="parent">
  <div></div>
  <div></div>    
  <div></div>    
</section>`,
    hiddenCSS: solidSquares,
    css: `.parent {
  display: flex;
  justify-content: space-around;
}`,
  },
  {
    title: 'justify-content: space-evenly;',
    markup: `<section class="parent">
  <div></div>
  <div></div>    
  <div></div>    
</section>`,
    hiddenCSS: solidSquares,
    css: `.parent {
  display: flex;
  justify-content: space-evenly;
}`,
  },
  {
    title: 'flex-wrap: nowrap; (기본값)',
    markup: `<section class="parent">
  <div></div>
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
</section>`,
    hiddenCSS: colorfullyRectangles,
    css: `.parent {
  display: flex;
  flex-wrap: nowrap;
}`,
  },
  {
    title: 'flex-wrap: wrap;',
    markup: `<section class="parent">
  <div></div>
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
  <div></div>    
</section>`,
    hiddenCSS: colorfullyRectangles,
    css: `.parent {
  display: flex;
  flex-wrap: wrap;
}`,
  },
  {
    title: 'flex-grow: 0; (기본값)',
    markup: `<section class="parent">
  <div class="first-child"></div>
  <div class="second-child"></div>    
  <div class="third-child"></div>    
</section>`,
    hiddenCSS: colorfullyFilledRectangle,
    css: `.parent {
  display: flex;
}

.first-child {
  flex-grow: 1;
}

.second-child {
  flex-grow: 2;
}

.third-child {
  flex-grow: 3;
}`,
  },
  {
    title: 'flex-shrink: 1; (기본값)',
    markup: `<section class="parent">
  <div class="first-child"></div>
  <div class="second-child"></div>    
  <div class="third-child"></div>    
</section>`,
    hiddenCSS: colorfullyFilledRectangle,
    css: `.parent {
  display: flex;
}

.first-child {
  width: 200px;
  flex-shrink: 2;
}

.second-child {
  width: 200px;
  flex-shrink: 0;
}

.third-child {
  width: 200px;
  flex-shrink: 1;
}`,
  },
  {
    title: 'align-self',
    markup: `<section class="parent">
  <div class="first-child"></div>
  <div class="second-child"></div>    
  <div class="third-child"></div>    
</section>`,
    hiddenCSS: tallParent,
    css: `.parent {
  display: flex;
  align-items: center;
}

.first-child {
  align-self: flex-end;
}`,
  },
];

export default datas;
