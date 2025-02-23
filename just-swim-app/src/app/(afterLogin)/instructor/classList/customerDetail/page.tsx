'use client';

import EditHeader from '@/app/_component/header/EditHeader';
import CustomerInfo from './_components/customerInfo/page';
import FeedbackRecord from './_components/feedbackRecord/page';
import CustomerClass from './_components/customerClass/page';

interface Data {
  name: string;
  image: string;
}

export default function customerDetail() {
  const data: Data = {
    name: '강사',
    image: '',
  };

  return (
    <>
      <EditHeader leftContent="수업 정보" data={data} />
      <CustomerInfo />
      <CustomerClass />
      <FeedbackRecord />
    </>
  );
}
