import { useHistory } from 'react-router';
import PrimaryButton from '../../components/button/PrimaryButton';

const Root = () => {
  const history = useHistory()

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center',
        paddingTop: '20px',
      }}
    >
      <img
        src="https://picsum.photos/400"
        alt="random"
        style={{ maxWidth: '300px', borderRadius: '50%' }}
      />
      <div style={{ textAlign: 'center', lineHeight: 1.8 }}>
        <p>Frontend 개발자를 위한</p>
        <p>웹 페이지에 들어오신 것을 환영합니다.</p>
      </div>
      <PrimaryButton onClick={() => history.push('/beginner')}>시작하기</PrimaryButton>
      <div style={{ height: '50px' }}></div>
    </div>
  );
};

export default Root;
