import styled from 'styled-components';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

export const StyledAccordion = styled(Accordion)`
  box-shadow: unset;
  margin: 0 !important;
`;

type AccordionSummaryProps = {
  height?: number;
};

export const StyledAccordionSummary = styled(
  AccordionSummary
)<AccordionSummaryProps>`
  height: ${(props) => (props.height ? props.height + 'px' : '25px')};
  margin: 0 !important;
  min-height: unset !important;
  padding: 0;

  .MuiAccordionSummary-content.Mui-expanded {
    margin: 0;
  }
`;

export const StyledAccordionDetails = styled(AccordionDetails)`
  padding: 0;
  display: block;
`;
