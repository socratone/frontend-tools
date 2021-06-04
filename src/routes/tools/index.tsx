import styled from 'styled-components';
import BarListItem from '../../components/listItem/BarListItem';
import GradientIcon from '@material-ui/icons/Gradient';
import ExtensionIcon from '@material-ui/icons/Extension';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import OpacityIcon from '@material-ui/icons/Opacity';
import EmojiSymbolsIcon from '@material-ui/icons/EmojiSymbols';
import ColorizeIcon from '@material-ui/icons/Colorize';
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';
import VideocamIcon from '@material-ui/icons/Videocam';
import ImageIcon from '@material-ui/icons/Image';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import AppleIcon from '@material-ui/icons/Apple';
import BurstModeIcon from '@material-ui/icons/BurstMode';
import WallpaperIcon from '@material-ui/icons/Wallpaper';
import TimelineIcon from '@material-ui/icons/Timeline';
import CodeIcon from '@material-ui/icons/Code';
import ItemsAccordion from '../../components/accordion/ItemsAccordion';
import Column from '../../components/box/Column';

const Tools = () => {
  return (
    <Column mt="10px" gap={10}>
      <ItemsAccordion title="이미지" gap={10}>
        <Grid>
          <BarListItem
            title="Unsplash"
            description="이미지 다운로드"
            icon={<ImageIcon />}
            link="https://unsplash.com/"
          />
          <BarListItem
            title="SVG Backgrounds"
            description="SVG 배경 코드"
            icon={<FilterHdrIcon />}
            link="https://www.svgbackgrounds.com/"
          />
          <BarListItem
            title="Flaticon"
            description="아이콘 다운로드"
            icon={<EmojiSymbolsIcon />}
            link="https://www.flaticon.com/"
          />
          <BarListItem
            title="Iconmonstr"
            description="아이콘 다운로드"
            icon={<EmojiSymbolsIcon />}
            link="https://iconmonstr.com/"
          />
          <BarListItem
            title="Picsum"
            description="랜덤 이미지 목업"
            icon={<WallpaperIcon />}
            link="https://picsum.photos/"
          />
          <BarListItem
            title="CSS Sprites Tool"
            description="CSS Sprites 변환"
            icon={<BurstModeIcon />}
            link="http://cssspritestool.com/"
          />
          <BarListItem
            title="SVG Spreact"
            description="SVG Sprites 변환"
            icon={<BurstModeIcon />}
            link="https://svgsprit.es/"
          />
        </Grid>
      </ItemsAccordion>

      <ItemsAccordion title="영상" gap={10}>
        <Grid>
          <BarListItem
            title="Pexels"
            description="동영상 다운로드"
            icon={<VideocamIcon />}
            link="https://www.pexels.com/ko-kr/"
          />
        </Grid>
      </ItemsAccordion>

      <ItemsAccordion title="CSS 예제" gap={10}>
        <Grid>
          <BarListItem
            title="Beautiful CSS box-shadow"
            description="box-shadow 예제"
            icon={<OpacityIcon />}
            link="https://getcssscan.com/css-box-shadow-examples"
          />
          <BarListItem
            title="CSS Gradient Generator"
            description="그라디언트"
            icon={<GradientIcon />}
            link="https://www.colorzilla.com/gradient-editor/"
          />
          <BarListItem
            title="The Shapes of CSS"
            description="CSS 도형 예제"
            icon={<ExtensionIcon />}
            link="https://css-tricks.com/the-shapes-of-css/"
          />
        </Grid>
      </ItemsAccordion>

      <ItemsAccordion title="애니메이션" gap={10}>
        <Grid>
          <BarListItem
            title="Animate.css"
            description="애니메이션 예제"
            icon={<TransferWithinAStationIcon />}
            link="https://animate.style/"
          />
          <BarListItem
            title="Cubic Bezier"
            description="베지어 곡선 코드"
            icon={<TimelineIcon />}
            link="https://cubic-bezier.com"
          />
        </Grid>
      </ItemsAccordion>

      <ItemsAccordion title="Validator" gap={10}>
        <Grid>
          <BarListItem
            title="HTML Validator"
            description="HTML 코드 검사"
            icon={<ColorizeIcon />}
            link="https://validator.w3.org/"
          />
          <BarListItem
            title="CSS Validator"
            description="CSS 코드 검사"
            icon={<ColorizeIcon />}
            link="https://jigsaw.w3.org/css-validator/"
          />
        </Grid>
      </ItemsAccordion>

      <ItemsAccordion title="Trend" gap={10}>
        <Grid>
          <BarListItem
            title="State of JS"
            description="JavaScript Trend"
            icon={<TrendingUpIcon />}
            link="https://2020.stateofjs.com/en-US/technologies/front-end-frameworks/"
          />
          <BarListItem
            title="State of CSS"
            description="CSS Trend"
            icon={<TrendingUpIcon />}
            link="https://2020.stateofcss.com/en-US/technologies/css-frameworks/"
          />
        </Grid>
      </ItemsAccordion>

      <ItemsAccordion title="ETC" gap={10}>
        <Grid>
          <BarListItem
            title="Favicon Generator"
            description="favicon 생성"
            icon={<AppleIcon />}
            link="https://realfavicongenerator.net/"
          />
          <BarListItem
            title="Char Ref"
            description="문자 코드"
            icon={<CodeIcon />}
            link="https://dev.w3.org/html5/html-author/charref"
          />
        </Grid>
      </ItemsAccordion>
    </Column>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 10px;
  width: 100%;
`;

export default Tools;
