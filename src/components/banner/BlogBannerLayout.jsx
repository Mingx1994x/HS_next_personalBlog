import BlogCardContent from '../rectCard/BlogCardContent';

export default function BlogBannerLayout({ blogData, hasContent }) {
  return (
    <section className="blog-banner">
      <picture>
        <source srcSet={blogData.images.mobile} media="(max-width: 992px)" />
        <img
          src={blogData.images.desktop}
          className="banner-section-left blog-banner-img"
          alt={blogData.title}
        />
      </picture>
      <div className="container blog-banner-content">
        <div className="row d-flex justify-content-end">
          <div className="col-md-6">
            <div className="py-12 d-flex flex-column justify-content-center">
              <BlogCardContent
                id={blogData.id}
                date={blogData.date}
                tags={blogData.tags}
                statusTag={blogData.statusTag}
                title={blogData.title}
                content={blogData.content}
                hasContent={hasContent}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
