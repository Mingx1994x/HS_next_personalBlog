export default function BlogCard({ cardData }) {
  const { images, date, tags, statusTag, title, content } = cardData
  return (
    <div className="rect-card">
      <picture className="mb-4">
        <source srcSet={images.desktop} media="(max-width: 992px)" />
        <img src={images.mobile} className="rect-card-img" alt={title} />
      </picture>
      <div className="rect-card-content">
        <div className="mb-4">
          <p className="mb-1">{date}</p>
          <div className="rect-card-tag d-flex align-items-center">
            <p className="me-2">
              {
                tags.map((tag, index) => (
                  <span className="text-primary" key={index}>{tag} </span>
                ))
              }
            </p>
            {
              statusTag && (
                <p className="tag pill-sm tag-primary flex-shrink-0 fs-6 lh-base lh-md-1">{statusTag}</p>
              )
            }
          </div>
          <h3 className="rect-card-title mb-2">{title}</h3>
          <p className="text-secondary multi-line-truncate">{content}</p>
        </div>
        <div className="mt-auto">

          <button type="button" className="btn btn-lg pill-btn btn-outline-secondary mt-auto">閱讀內文</button>
        </div>
      </div>
    </div>
  )
}