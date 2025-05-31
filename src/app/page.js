import BannerImages from "@/components/BannerImages";
import Subscription from "@/components/Subscription";

import Image from "next/image";
// import styles from "./page.module.css";
export default function Home() {
  return (
    <>
      <section className="banner">
        <div className="d-flex flex-column flex-md-row">
          <img src="/images/banner_1.jpg" className='full-banner-img' alt="banner_1_Alyse" />
          <div className="position-relative" style={{
            zIndex: 1
          }}>
            <img src="/images/banner_2.jpg" className='full-banner-img fix-height' alt="banner_2" />
            <div className="banner-title-area">
              <h1 className="main-title text-primary">Alyse Wang</h1>
              <p className="text-primary sub-title">前端工程師 & 職涯諮詢師</p>
            </div>
          </div>
        </div>
        <div className="banner-content container-fluid d-flex justify-content-end">
          <div className="sub-content">
            <div className="d-flex flex-column flex-lg-row mb-4">
              <p className="text-first-row">嗨，我是<span className="mx-2">Alyse</span></p>
              <p>一名深耕前端技術的工程師。</p>
            </div>
            <p className="mb-4">擅長 React、Vue 等框架，同時熱愛為轉職與新手工程師提供職涯指導。邀請你與我一起，開啟更具潛能的程式與職涯之旅！</p>
            <ul className="icon-area d-flex list-unstyled">
              <li><i className="bi bi-youtube"></i></li>
              <li><i className="bi bi-broadcast-pin"></i></li>
              <li><i className="bi bi-facebook"></i></li>
              <li><i className="bi bi-linkedin"></i></li>
              <li><i className="bi bi-instagram"></i></li>
            </ul>
          </div>
        </div>
      </section>
      <h2>
        這裡是首頁
      </h2>
      <section className="subscription">
        <BannerImages heightStyle={'strict-height'}>
          <Subscription />
        </BannerImages>
      </section>
      <button className="btn btn-warning">
        沒啥作用的按鈕
      </button>
    </>
  );
}
