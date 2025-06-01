import BannerInfo from "@/components/banner/BannerInfo";
import BannerImages from "@/components/banner/BannerImages";
import BannerTitle from "@/components/banner/BannerTitle";
import SubscriptionFrom from "@/components/SubscriptionFrom";
import ServiceCard from "@/components/banner/ServiceCard";
// import Image from "next/image";

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
  ]
  return (
    <>
      <BannerImages heightStyle={'fix-height-lg'}>
        <BannerTitle
          mainTitle={'Alyse Wang'}
          subTitle={'前端工程師 & 職涯諮詢師'}
        />
      </BannerImages>
      <BannerInfo />

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
              <i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>

      <section className="subscription">
        <div className="d-flex flex-column flex-md-row">
          <img src="/images/banner_3.jpg" className='full-banner-img' alt="banner_1_Alyse" />
          <div className="full-banner-img semi-background" style={{
            backgroundImage: 'url("/images/banner_2.jpg")'
          }}>
            <SubscriptionFrom />
          </div>
        </div>
      </section>
      <button className="btn btn-warning">
        沒啥作用的按鈕
      </button>
    </>
  );
}
