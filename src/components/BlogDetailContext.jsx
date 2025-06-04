export default function BlogDetailContext({ contextData, children }) {
  const { images, title } = contextData;
  return (
    <>
      <picture>
        <source srcSet={images.mobile} media="(max-width: 768px)" />
        <img src={images.desktop} className="img-fluid mb-6" alt={title} />
      </picture>
      <h2 className="blog-detail-title text-primary">{title}</h2>
      {children}
    </>
  );
}
