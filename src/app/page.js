import BannerInfo from "@/components/banner/BannerInfo";
import BannerImages from "@/components/banner/BannerImages";
import BannerTitle from "@/components/banner/BannerTitle";
import SubscriptionFrom from "@/components/SubscriptionFrom";

// import Image from "next/image";
export default function Home() {
  return (
    <>
      <BannerImages heightStyle={'fix-height-lg'}>
        <BannerTitle
          mainTitle={'Alyse Wang'}
          subTitle={'前端工程師 & 職涯諮詢師'}
        />
      </BannerImages>
      <BannerInfo />

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
