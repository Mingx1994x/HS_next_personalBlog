import BannerImages from "@/components/banner/BannerImages";
import BannerTitle from "@/components/banner/BannerTitle";

export default function Blog() {
  return (
    <>
      <BannerImages heightStyle={'fix-height-sm'}>
        <BannerTitle
          mainTitle={'BLOG'}
          subTitle={'前端工程師 & 職涯諮詢師'}
        />
      </BannerImages>
    </>
  )
}