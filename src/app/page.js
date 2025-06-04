// import Image from "next/image";

import BannerInfo from "@/components/banner/BannerInfo";
import MainBannerLayout from "@/components/banner/MainBannerLayout";
import BannerTitle from "@/components/banner/BannerTitle";
import SubscriptionFrom from "@/components/SubscriptionFrom";
import ServiceCard from "@/components/ServiceCard";
import CaseCard from "@/components/CaseCard";
import Footer from "@/components/Footer";
import SelectBlogs from "@/components/SelectBlogs";

export default function Home() {

  const serviceCardsData = [
    {
      imgName: 'service-section_1.jpg',
      title: '履歷健檢',
      content: '履歷是打開機會之門的第一步。讓我協助你突顯專業技術與核心能力，並透過簡短模擬面試為你加分，讓面試官第一眼就被你吸引。',
      isRowReverse: false
    },
    {
      imgName: 'service-section_2.jpg',
      title: '線上諮詢',
      content: '想快速解決前端學習瓶頸，或需要專業職涯指引？透過線上一對一諮詢，我將協助你更有方向地邁進。',
      isRowReverse: true
    },
    {
      imgName: 'service-section_3.jpg',
      title: '網頁開發',
      content: '想打造高效能、具美感的網站？我提供從需求訪談到架構實作的一站式服務，讓你的品牌與產品在線上脫穎而出。',
      isRowReverse: false
    },
    {
      imgName: 'service-section_4.jpg',
      title: '企業內訓',
      content: '想讓團隊快速掌握前端最新技術或優化現有專案流程？我可協助打造專業、實用的企業內訓課程，一次解決團隊痛點。',
      isRowReverse: true
    }
  ];

  const caseCardsData = [
    {
      imgName: 'consult_avatar_1.jpg',
      title: '無經驗到前端工程師 Offer',
      lists: ['打造前端專案與履歷亮點', '深度強化面試表現']
    },
    {
      imgName: 'consult_avatar_2.jpg',
      title: '轉職迷茫到明確學習規劃',
      lists: ['制訂階段性目標與時間安排', '鼓勵參與前端社群或活動']
    },
    {
      imgName: 'consult_avatar_3.jpg',
      title: '面試緊張到從容應對',
      lists: ['透過面試模擬找出常犯的邏輯漏洞', '討論遇到不熟悉議題時的回應方式']
    },
    {
      imgName: 'consult_avatar_4.jpg',
      title: '面試緊張到從容應對',
      lists: ['擬定進階框架或技術研究目標', '培養跨團隊溝通與簡報能力']
    }
  ];

  return (
    <>
      {/* banner區塊 */}
      <MainBannerLayout heightStyle={'fix-height-lg'}>
        <BannerTitle
          mainTitle={'Alyse Wang'}
          subTitle={'前端工程師 & 職涯諮詢師'}
        />
      </MainBannerLayout>
      <BannerInfo />

      {/* 專業服務與方案區塊 */}
      <section className="section-spacing">
        <div className="container">
          <h2 className="display-main-title mb-8">專業服務與方案</h2>
          <ul className="service-card list-unstyled mb-8">
            {
              serviceCardsData.map((data, index) => {
                return (
                  <ServiceCard
                    key={index}
                    cardData={data}
                    isLastOne={index === serviceCardsData.length - 1 ? true : false}
                  />
                )
              })
            }
          </ul>
          <div className="d-flex flex-column flex-md-row align-items-end align-items-md-center justify-content-md-end">
            <p className="fs-3 fw-bold mb-2 mb-md-0">聯繫我，取得更多資訊！</p>
            <button type="button" className="btn btn-lg circle-arrow-btn btn-outline-secondary">
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* 部落格精選 */}
      <section className="blogSelect section-spacing">
        <div className="container">
          <h2 className="display-main-title mb-6">部落格精選</h2>
          <SelectBlogs />
        </div>
      </section >

      {/* 職涯諮詢成功案例 */}
      <section className="section-spacing" >
        <div className="container">
          <h2 className="display-main-title mb-6 d-none d-md-block">職涯諮詢成功案例</h2>
          <h2 className="display-main-title mb-6 d-md-none">職涯諮詢<br />成功案例</h2>
          <div className="row mb-10">
            <div className="col-md-7">
              <div className="consult-img-album">
                <img src="/images/consult_1.jpg" className="consult-img" alt="" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="consult-card">
                <div className="consult-wrapper slide-left-down">
                  <p className="consult-text-spacing">在職涯發展的關鍵轉折點上，適時的協助與正確的方向至關重要。藉由職涯諮詢，我可以幫助你加速釐清目標、建立更全面的技術與軟實力，並有效<span className="text-primary">突破原有的舒適圈。</span></p>
                </div>
                <div className="consult-wrapper bg-neutral-200 slide-up">
                  <p className="consult-text-spacing mb-6">期待在下一個新機會中，我能與你一起攜手邁向更高峰！</p>
                  <button type="button" className="btn btn-lg pill btn-outline-primary fw-bold">立即預約諮詢</button>
                </div>
              </div>
            </div>
          </div>
          <div className="case-wrapper">
            <div className="row case-flex-area">
              {caseCardsData.map((data, index) => (
                <div className="col-md-3" key={index}>
                  <CaseCard
                    cardData={data}
                  />
                </div>
              )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 訂閱電子報 */}
      <section className="subscription" >
        <div className="d-flex flex-column flex-md-row">
          <img src="/images/banner_3.jpg" className='full-banner-img' alt="banner_1_Alyse" />
          <div className="full-banner-img semi-background" style={{
            backgroundImage: 'url("/images/banner_2.jpg")'
          }}>
            <SubscriptionFrom />
          </div>
        </div>
      </section>

      {/* 與我聯繫 */}
      <section className="contact section-spacing" >
        <div className="container">
          <h2 className="display-main-title mb-6">與我聯繫</h2>
          <ul className="list-unstyled d-flex flex-column row-gap-6 row-gap-md-4">
            <li className="contact-list">
              <a href="mailto:alysewang@hexschool.com" className="contact-link flex-area">
                <p className="text-slide">
                  <span className="text-decoration-underline me-0 me-md-4">alysewang@hexschool.com</span>
                  合作洽談
                </p>
                <i className="bi bi-arrow-right fs-4 ms-0 ms-md-auto" style={{
                  width: '24px',
                  height: '24px'
                }}></i>
              </a>
            </li>
            <li className="contact-list">
              <a href="#" className="contact-link flex-area align-items-md-center">
                <div className="icon-area text-slide">
                  <span className="icon-square">
                    <i className="bi bi-youtube fs-4"></i>
                  </span>
                  <span className="mx-2">Youtube</span>
                  <span>職涯諮詢室</span>
                </div>
                <i className="bi bi-arrow-right fs-4 ms-0 ms-md-auto" style={{
                  width: '24px',
                  height: '24px'
                }}></i>
              </a>
            </li>
            <li className="contact-list">
              <a href="#" className="contact-link flex-area align-items-md-center">
                <div className="icon-area text-slide">
                  <span className="icon-square">
                    <i className="bi bi-broadcast-pin fs-4"></i>
                  </span>
                  <span className="mx-2">podcast</span>
                  <span>職涯諮詢室</span>
                </div>
                <i className="bi bi-arrow-right fs-4 ms-0 ms-md-auto" style={{
                  width: '24px',
                  height: '24px'
                }}></i>
              </a>
            </li>
            <li className="contact-list">
              <a href="#" className="contact-link flex-area align-items-md-center">
                <div className="icon-area text-slide">
                  <span className="icon-square">
                    <i className="bi bi-facebook fs-4"></i>
                  </span>
                  <span className="mx-2">Facebook</span>
                  <span>前端社群</span>
                </div>
                <i className="bi bi-arrow-right fs-4 ms-0 ms-md-auto" style={{
                  width: '24px',
                  height: '24px'
                }}></i>
              </a>
            </li>
            <li className="contact-list">
              <a href="#" className="contact-link flex-area align-items-md-center">
                <div className="icon-area text-slide">
                  <span className="icon-square">
                    <i className="bi bi-linkedin fs-4"></i>
                  </span>
                  <span className="mx-2">linkedin</span>
                  <span>職涯交流</span>
                </div>
                <i className="bi bi-arrow-right fs-4 ms-0 ms-md-auto" style={{
                  width: '24px',
                  height: '24px'
                }}></i>
              </a>
            </li>
            <li className="contact-list">
              <a href="#" className="contact-link flex-area align-items-md-center">
                <div className="icon-area text-slide">
                  <span className="icon-square">
                    <i className="bi bi-instagram fs-4"></i>
                  </span>
                  <span className="mx-2">Instagram</span>
                  <span>日常分享</span>
                </div>
                <i className="bi bi-arrow-right fs-4 ms-0 ms-md-auto" style={{
                  width: '24px',
                  height: '24px'
                }}></i>
              </a>
            </li>

          </ul>
        </div>
      </section>
    </>
  );
}
