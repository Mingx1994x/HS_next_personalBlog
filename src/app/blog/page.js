import BannerImages from "@/components/BannerImages";
import BannerTitle from "@/components/BannerTitle";

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