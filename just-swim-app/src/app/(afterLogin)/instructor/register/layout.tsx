import EditHeader from '@/app/_component/header/EditHeader';
import styled from './classRegister.module.scss';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={styled.register_wrapper}>
        {/* TODO: 공통컴포넌트 이름을 바꿀 필요가 있다. */}
        <div className={styled.register_header}>
          <EditHeader leftContent="수업 등록하기" />
        </div>
        {children}
      </div>
    </>
  );
}
