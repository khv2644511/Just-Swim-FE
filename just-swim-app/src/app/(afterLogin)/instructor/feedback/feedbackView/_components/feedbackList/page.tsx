/* eslint-disable react/jsx-key */
import styles from './feedbackList.module.scss';

export default function FeedbackList() {
  let feedbackList = [
    {
      date: '3월 12일',
      type: '개별 피드백',
      content:
        '회원님! 오늘 자세는 좋았으나 마지막 스퍼트가 부족해 보였어요 호흡하실 때에도 팔 각도를 조정해 주시면...',
      target: 'User 1122 님',
    },
    {
      date: '3월 10일',
      type: '개별 피드백',
      content: '오늘 진행한 그룹 수업 영상 보내드립니다~',
      target: 'User 1122 님 외 3명',
    },
    {
      date: '3월 8일',
      type: '단체 피드백',
      content:
        '센터 휴강으로 인해 3월 9일 수업은 휴강 임을 다시 한번 알려드립니다. 모두 미세먼지 조심하시고 3월 13일날 ...',
      target: '아티스틱 스윔 개별 코치 반 전체',
    },
    {
      date: '3월 8일',
      type: '단체 피드백',
      content:
        '센터 휴강으로 인해 3월 9일 수업은 휴강 임을 다시 한번 알려드립니다. 모두 미세먼지 조심하시고 3월 13일날 ...',
      target: '아티스틱 스윔 개별 코치 반 전체',
    },
    {
      date: '3월 8일',
      type: '단체 피드백',
      content:
        '센터 휴강으로 인해 3월 9일 수업은 휴강 임을 다시 한번 알려드립니다. 모두 미세먼지 조심하시고 3월 13일날 ...',
      target: '아티스틱 스윔 개별 코치 반 전체',
    },
  ];

  return (
    <div className={styles.feedbackList_box}>
      <div className={styles.feedbackList_text}>
        <p className={styles.prev}>이전 기록</p>
        <p>시간 순으로 수강생에게 남긴 기록을 확인할 수 있습니다.</p>
      </div>

      <div>
        {feedbackList.map((item) => (
          <div className={styles.feedbackList_Card}>
            <div>
              <p>
                <span>
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1036_358)">
                      <path
                        d="M5.25 8.75H6.75V10.25H5.25V8.75ZM15.75 5V15.5C15.75 16.325 15.075 17 14.25 17H3.75C2.9175 17 2.25 16.325 2.25 15.5L2.2575 5C2.2575 4.175 2.9175 3.5 3.75 3.5H4.5V2H6V3.5H12V2H13.5V3.5H14.25C15.075 3.5 15.75 4.175 15.75 5ZM3.75 6.5H14.25V5H3.75V6.5ZM14.25 15.5V8H3.75V15.5H14.25ZM11.25 10.25H12.75V8.75H11.25V10.25ZM8.25 10.25H9.75V8.75H8.25V10.25Z"
                        fill="#050606"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1036_358">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                {item.date}
              </p>
              <p>
                <span>
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_884_664)">
                      <path
                        d="M14.25 2.75H3.75C2.925 2.75 2.25 3.425 2.25 4.25V14.75C2.25 15.575 2.925 16.25 3.75 16.25H14.25C15.075 16.25 15.75 15.575 15.75 14.75V4.25C15.75 3.425 15.075 2.75 14.25 2.75ZM12.75 14.75H5.25V14.57C6.315 13.715 7.62 13.25 9 13.25C10.38 13.25 11.685 13.715 12.75 14.57V14.75ZM14.25 13.895C12.9 12.5675 11.0475 11.75 9 11.75C6.9525 11.75 5.1 12.5675 3.75 13.895V4.25H14.25V13.895ZM9 10.25C10.4475 10.25 11.625 9.0725 11.625 7.625C11.625 6.1775 10.4475 5 9 5C7.5525 5 6.375 6.1775 6.375 7.625C6.375 9.0725 7.5525 10.25 9 10.25ZM9 6.5C9.6225 6.5 10.125 7.0025 10.125 7.625C10.125 8.2475 9.6225 8.75 9 8.75C8.3775 8.75 7.875 8.2475 7.875 7.625C7.875 7.0025 8.3775 6.5 9 6.5Z"
                        fill="#050606"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_884_664">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                {item.type}
              </p>
            </div>
            <p className={styles.content}>{item.content}</p>
            <p className={styles.target}>
              <span className={styles.icon}>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <mask
                    id="mask0_884_642"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="22"
                    height="22">
                    <circle cx="11" cy="11" r="11" fill="#EBECEE" />
                  </mask>
                  <g mask="url(#mask0_884_642)">
                    <circle cx="11" cy="11" r="11" fill="#EBECEE" />
                    <path
                      d="M16.1538 20.1355C16.1538 20.1355 15.0884 21.9999 10.8269 21.9999C6.56538 21.9999 5.5 20.1355 5.5 20.1355V18.8165C5.5 17.9419 5.85076 17.1031 6.47513 16.4847C7.09949 15.8663 7.94631 15.5189 8.8293 15.5189H12.8245C13.7074 15.5189 14.5543 15.8663 15.1786 16.4847C15.803 17.1031 16.1538 17.9419 16.1538 18.8165V20.1355ZM10.9334 13.4142C10.4088 13.4142 9.88925 13.3119 9.40453 13.113C8.91982 12.9141 8.4794 12.6227 8.10841 12.2552C7.73743 11.8878 7.44315 11.4515 7.24237 10.9714C7.04159 10.4913 6.93826 9.97676 6.93826 9.45711C6.93826 8.93745 7.04159 8.42289 7.24237 7.94279C7.44315 7.46269 7.73743 7.02646 8.10841 6.65901C8.4794 6.29156 8.91982 6.00008 9.40453 5.80122C9.88925 5.60235 10.4088 5.5 10.9334 5.5C11.993 5.5 13.0092 5.91691 13.7584 6.65901C14.5077 7.40111 14.9286 8.40762 14.9286 9.45711C14.9286 10.5066 14.5077 11.5131 13.7584 12.2552C13.0092 12.9973 11.993 13.4142 10.9334 13.4142Z"
                      fill="white"
                    />
                    <path
                      d="M17.2868 20.821H15.7153V19.2496C15.7153 18.6244 15.467 18.0249 15.0249 17.5828C14.5829 17.1408 13.9833 16.8924 13.3582 16.8924H8.6439C8.01875 16.8924 7.4192 17.1408 6.97715 17.5828C6.5351 18.0249 6.28676 18.6244 6.28676 19.2496V20.821H4.71533V19.2496C4.71533 18.2077 5.12923 17.2084 5.86598 16.4717C6.60273 15.7349 7.60198 15.321 8.6439 15.321H13.3582C14.4001 15.321 15.3994 15.7349 16.1361 16.4717C16.8729 17.2084 17.2868 18.2077 17.2868 19.2496V20.821ZM11.001 14.1424C10.382 14.1424 9.76893 14.0205 9.19697 13.7836C8.625 13.5467 8.1053 13.1994 7.66754 12.7617C7.22978 12.3239 6.88253 11.8042 6.64561 11.2322C6.4087 10.6603 6.28676 10.0472 6.28676 9.42815C6.28676 8.80906 6.4087 8.19604 6.64561 7.62407C6.88253 7.05211 7.22978 6.53241 7.66754 6.09465C8.1053 5.65689 8.625 5.30964 9.19697 5.07272C9.76893 4.83581 10.382 4.71387 11.001 4.71387C12.2514 4.71387 13.4505 5.21055 14.3346 6.09465C15.2187 6.97875 15.7153 8.17785 15.7153 9.42815C15.7153 10.6785 15.2187 11.8776 14.3346 12.7617C13.4505 13.6458 12.2514 14.1424 11.001 14.1424ZM11.001 12.571C11.8346 12.571 12.634 12.2399 13.2234 11.6505C13.8128 11.0611 14.1439 10.2617 14.1439 9.42815C14.1439 8.59461 13.8128 7.79522 13.2234 7.20582C12.634 6.61642 11.8346 6.2853 11.001 6.2853C10.1675 6.2853 9.36811 6.61642 8.77871 7.20582C8.18931 7.79522 7.85819 8.59461 7.85819 9.42815C7.85819 10.2617 8.18931 11.0611 8.77871 11.6505C9.36811 12.2399 10.1675 12.571 11.001 12.571Z"
                      fill="#3689FF"
                    />
                  </g>
                </svg>
              </span>
              {item.target}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
