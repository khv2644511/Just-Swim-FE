'use client';

import Timepicker from '@/app/_component/TimePicker';
import Header from '../../../../../_component/Header';
import Input from '../../../../../_component/Input';
import ClassInfo from '../../../../_component/ClassInfo';
import Datepicker from '@/app/_component/DatePicker';
import { useState } from 'react';
import Link from 'next/link';
import ColorModal from '@/app/_component/Modal/ColorModal';
import location_icon from '/public/assets/input_icon_location.png';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styled from './classInfoEdit.module.scss';
import RepeatDatepicker from '@/app/_component/RepeatDatePicker';

export default function ClassInfoEdit() {
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);
  // const clickModal = () => setShowModal(!showModal);
  const clickModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div>
      <Header title="수업 정보 수정" />

      <div className={styled.edit}>
        <div className={styled.inner}>
          <h3>
            수정된 정보는 수강생 분들에게도 <br /> 적용되니 유의해주세요.
          </h3>

          <div className={styled.class_info1}>
            <Input
              label="수업명"
              defaultValue="아침 5반"
              type="text"
              require={true}
            />
            <Input
              label="수업 설명"
              defaultValue="초보 반으로, 배영 위주로 수업"
              type="text"
              require={true}
            />
            {/* <div className="input_text">수업명</div> */}
            {/* <input type="text" defaultValue={'아침 5반'} /> */}
          </div>
        </div>
        <div className={styled.line}></div>
        <div className={styled.inner}>
          {/* <ClassInfo islabel={true} bgColor={'gray'} /> */}

          <div className={styled.classInfo}>
            <div className={styled.require}>
              <label>수업시간</label>
              <span>(필수)</span>
            </div>
            <div className={styled.classInfo_time}>
              <Timepicker label="시작" bgColor="gray" />
              ~
              <Timepicker label="끝" bgColor="gray" />
            </div>
            {/* hyebin 매주 요일 지정 구현하기 */}

            <div className={styled.require}>
              <label>수업 요일</label>
              <span>(필수)</span>
            </div>
            <Datepicker bgColor="gray" />

            <label htmlFor="location">수업 위치</label>

            <div className={styled.location_input}>
              <input
                id="location"
                className={`${styled.input} ${styled.gray}`}
                placeholder="강동구 실내 수영장"
                onClick={() => router.push('edit/search')}
              />
              <Image
                src={location_icon}
                alt="location icon"
                width={20}
                height={20}
                className={styled.locatin_icon}
              />
            </div>

            <label>종료 일자</label>
            <RepeatDatepicker bgColor="gray" />

            <label>구분 색</label>
            <div className={styled.color_input}>
              <input
                className={`${styled.input} ${styled.gray}`}
                onClick={clickModal}
                placeholder="구분색"></input>
              <div className={styled.pick_color} />
            </div>
            {showModal && (
              <ColorModal showModal={showModal} setShowModal={setShowModal} />
            )}
          </div>
        </div>
        <button className={styled.edit_btn}>수정하기</button>
      </div>
    </div>
  );
}
