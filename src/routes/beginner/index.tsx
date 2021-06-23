import { Link } from "react-router-dom";
import Column from "../../components/box/Column"

const Beginner = () => {
  return (  
    <div>
      <Column mt={10}>
        <Link to="/beginner/coding-test">코딩 테스트</Link>
      </Column>
    </div>
  );
}
 
export default Beginner;