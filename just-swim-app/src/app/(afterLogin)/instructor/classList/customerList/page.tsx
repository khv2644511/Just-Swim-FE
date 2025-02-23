import Image from 'next/image';
import Header from '../../../../_component/Header';
import searchIcon from '/public/assets/icon_search.png';
import arrowRightIcon from '/public/assets/icon_arrow_right.png';
import Link from 'next/link';
import styled from './customerList.module.scss';

export default function CustomerList() {
  const customerList = [
    { name: '김고독', profile: 'profile1' },
    { name: '김고독', profile: 'no_profile' },
    { name: '김고독', profile: 'profile1' },
    { name: '김고독', profile: 'profile1' },
    { name: '김고독', profile: 'no_profile' },
  ];
  return (
    <div className={styled.customerList}>
      <Header title="수강생 목록" />

      <div className={styled.inner}>
        <div className={styled.search}>
          <input type="text" placeholder="회원명으로 검색하세요" />
          <button>
            <Image src={searchIcon} alt="검색" />
          </button>
        </div>

        <div>
          <div className={`${styled.row} ${styled.title}`}>
            <div>아침 5반</div>
            <button>가나다순</button>
          </div>
          {customerList.map((el, index) => (
            <li key={index} className={styled.customer}>
              <input type="checkbox" id={`checkbox ${index}`} />
              <label className={`${styled.row}`} htmlFor={`checkbox ${index}`}>
                <Image
                  src={`/assets/${el.profile}.png`}
                  alt="profile"
                  width={34}
                  height={34}
                />
                <div>{el.name}</div>
              </label>
              <Link href={'/classList/customerDetail'}>
                <Image src={arrowRightIcon} alt="자세히보기" />
              </Link>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
