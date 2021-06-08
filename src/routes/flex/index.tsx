import Column from '../../components/box/Column';
import CSSCodeViewer from '../../components/tester/CSSCodeViewer';
import CSSViewer from '../../components/tester/CSSViewer';
import datas from './datas';
import { CodeWrap, ViewerWrap, Item, Title } from './styles';

const Flex = () => {
  return (
    <Column gap={20} mt="10px">
      {datas.map((item, index) => (
        <Item key={index}>
          <Title>{item.title}</Title>
          <CodeWrap>
            <CSSCodeViewer css={item.css} markup={item.markup} />
          </CodeWrap>
          <ViewerWrap>
            <CSSViewer
              markup={item.markup}
              hiddenCSS={item.hiddenCSS}
              css={item.css}
            />
          </ViewerWrap>
        </Item>
      ))}
    </Column>
  );
};

export default Flex;
