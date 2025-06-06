export default function BannerTitle({ mainTitle, subTitle }) {
  return (
    <div className="banner-section-title">
      <h1 className="banner-title-main text-primary">{mainTitle}</h1>
      <p className="banner-title-sub text-primary">
        {subTitle}
      </p>
    </div>
  )
}