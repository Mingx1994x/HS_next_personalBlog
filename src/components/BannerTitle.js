export default function BannerTitle({ mainTitle, subTitle }) {
  return (
    <div className="banner-title-area">
      <h1 className="main-title text-primary">{mainTitle}</h1>
      <p className="text-primary sub-title">{subTitle}</p>
    </div>
  )
}