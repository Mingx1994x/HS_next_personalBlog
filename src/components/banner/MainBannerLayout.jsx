export default function MainBannerLayout({
  children,
  bannerData,
  heightStyle = '',
  justifyCenterStyle = false,
}) {
  return (
    <>
      <section className="banner-section">
        <img
          src={bannerData.url}
          alt={bannerData.title}
          className="banner-section-left"
        />
        <div
          className={`banner-section-right background-cover-sm ${heightStyle} ${
            justifyCenterStyle ? 'justify-content-center' : ''
          }`}
          style={{
            backgroundImage:
              'url("https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/Hero%20Section2.png")',
          }}
        >
          {children}
        </div>
      </section>
    </>
  );
}
