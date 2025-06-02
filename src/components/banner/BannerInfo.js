export default function BannerInfo() {
  return (
    <div className="banner-content container-fluid d-flex justify-content-end">
      <div className="sub-content">
        <div className="d-flex flex-column flex-lg-row mb-4">
          <p className="text-first-row">嗨，我是<span className="mx-2">Alyse</span></p>
          <p>一名深耕前端技術的工程師。</p>
        </div>
        <p className="mb-4">擅長 React、Vue 等框架，同時熱愛為轉職與新手工程師提供職涯指導。邀請你與我一起，開啟更具潛能的程式與職涯之旅！</p>
        <ul className="icon-area d-flex list-unstyled">
          <li className="icon-square me-1"><i className="bi bi-youtube"></i></li>
          <li className="icon-square me-1"><i className="bi bi-broadcast-pin"></i></li>
          <li className="icon-square me-1"><i className="bi bi-facebook"></i></li>
          <li className="icon-square me-1"><i className="bi bi-linkedin"></i></li>
          <li className="icon-square me-1"><i className="bi bi-instagram"></i></li>
        </ul>
      </div>
    </div>
  )
}