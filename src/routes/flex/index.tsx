import Column from '../../components/box/Column';
import Code from '../../components/tester/Code';
import CSSViewer from '../../components/tester/CSSViewer';
import datas from './datas';
import { CodeWrap, ViewerWrap, Item, Title } from './styles';

const Flex = () => {
  return (
    <Column gap={20} mt={10}>
      {datas.map((item, index) => (
        <Item key={index}>
          <ViewerWrap>
            <Title>{item.title}</Title>
            <CSSViewer
              markup={item.markup}
              hiddenCSS={item.hiddenCSS}
              css={item.css}
            />
          </ViewerWrap>
          <CodeWrap>
            <Code>{item.css}</Code>
          </CodeWrap>
        </Item>
      ))}
    </Column>
  );
};

export default Flex;
