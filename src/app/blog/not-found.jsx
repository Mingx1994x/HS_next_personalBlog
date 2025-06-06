'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const [countDown, setCountDown] = useState(9);
  const router = useRouter();

  useEffect(() => {
    if (countDown === 0) {
      router.replace('/blog');
    }

    const timer = setTimeout(() => {
      setCountDown((pre) => pre - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countDown]);

  return (
    <div className="container">
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{
          height: '75vh',
        }}
      >
        <div className="col-md-8 col-xl-6">
          <h3 className="text-center">此頁面不存在喔</h3>
          <h4 className="text-center">
            <span className="text-warning">{countDown}秒</span>
            後，將為您跳轉回部落格頁面
          </h4>
        </div>
      </div>
    </div>
  );
}
