import './onBoarding.scss';
import Logo from '/public/assets/logo.svg';
import Image from 'next/image';

export default function OnBoardingHeader() {
  return (
    <>
      <header>
        <div className="header_logo">
          <Image className="logo" src={Logo} alt="SWIM 로고" />
          <h3>수영인들을 위한 소통 창구</h3>
        </div>
        <div className="header_info">
          <p>
            원활한 서비스 이용을 위해
            <br />
            회원 가입 혹은 로그인을 진행해 주세요.
          </p>
        </div>
      </header>
    </>
  );
}
