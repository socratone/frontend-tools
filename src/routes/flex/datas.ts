const commonCSS = `
section {
  border: 10px solid lightgrey;
}

div {
  background: dodgerblue;
  width: 40px;
  height: 40px;
}`;

const datas = [
  {
    title: 'justify-content: space-between;',
    markup: `<section>
  <div></div>
  <div></div>    
  <div></div>    
</section>`,
    hiddenCSS: commonCSS,
    css: `section {
  display: flex;
  justify-content: space-between;
}`,
  },
  {
    title: 'justify-content: space-around;',
    markup: `<section>
  <div></div>
  <div></div>    
  <div></div>    
</section>`,
    hiddenCSS: commonCSS,
    css: `section {
  display: flex;
  justify-content: space-around;
}`,
  },
  {
    title: 'justify-content: space-evenly;',
    markup: `<section>
  <div></div>
  <div></div>    
  <div></div>    
</section>`,
    hiddenCSS: commonCSS,
    css: `section {
  display: flex;
  justify-content: space-evenly;
}`,
  },
];

export default datas;
