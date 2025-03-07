'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../ui/Button';
import useSubStatus from '@/hooks/useSubStatus';

const SubscriptionsStatus = () => {
  const router = useRouter();
  const subscriptionData = useSubStatus();
  const status = subscriptionData?.status.sub_status;

  const statusText = {
    loading: '로딩 중...',
    active: '구독중',
    none: '미구독',
    cancelled: '미구독',
    // refund_pending: '구독 취소 승인 중',
    refund_pending: '구독중',
    paused: '일시정지',
    error: '오류 발생',
  }[status];

  return (
    <div className="flex flex-col">
      <div className="w-full max-w-[40.1rem] flex justify-between gap-[5px] md:gap-0">
        <p className="md:mt-0 mt-5 text-[2.5rem] md:text-[5rem] font-bold">{statusText}</p>
      </div>
      {(status === 'none' || status === 'cancelled') && (
        <Button
          className="w-[15rem] md:w-[20.9rem] h-[4rem] md:h-[6rem] border border-black font-bold text-[1.6rem] md:text-[1.8rem] mt-[6.7rem]"
          size="small"
          variant="green"
          onClick={() => router.push('/pricing')}
        >
          구독하기
        </Button>
      )}
    </div>
  );
};

export default SubscriptionsStatus;
