import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  StyledAccordion,
  StyledAccordionSummary,
  StyledAccordionDetails,
} from './styles';

type ItemsAccordionProps = {
  title: string;
  gap?: number;
  defaultExpanded?: boolean;
  children: React.ReactNode;
};

const ItemsAccordion = ({ title, gap, defaultExpanded = true, children }: ItemsAccordionProps) => {
  return (
    <div>
      <StyledAccordion defaultExpanded={defaultExpanded}>
        <StyledAccordionSummary expandIcon={<ExpandMoreIcon />} height={25}>
          <Typography>{title}</Typography>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <div style={{ width: '100%', height: `${gap}px` }} />
          {children}
        </StyledAccordionDetails>
      </StyledAccordion>
    </div>
  );
};

export default ItemsAccordion;
