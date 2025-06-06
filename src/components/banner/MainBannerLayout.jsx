export default function MainBannerLayout({ children, hasHeightStyle = false }) {
  return (
    <>
      <section className="banner-section">
        <img
          src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/refs/heads/main/2025-web-camp/desktop/index/Hero%20Section.png"
          alt=""
          className="banner-section-left"
        />
        <div
          className={`banner-section-right background-cover-sm ${
            hasHeightStyle ? 'fix-height-sm' : ''
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
