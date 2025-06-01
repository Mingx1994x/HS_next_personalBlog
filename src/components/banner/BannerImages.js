export default function BannerImages({ children, heightStyle }) {
  return (
    <section className="d-flex flex-column flex-md-row">
      <img src="/images/banner_1.jpg" className='full-banner-img' alt="banner_1_Alyse" />
      <div className="position-relative" style={{
        zIndex: 1
      }}>
        <img src="/images/banner_2.jpg" className={`full-banner-img ${heightStyle}`} alt="banner_2" />
        {children}
      </div>
    </section>
  )

}