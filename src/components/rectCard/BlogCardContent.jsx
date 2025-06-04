import Link from 'next/link';

export default function BlogCardContent({
  id,
  date,
  tags,
  statusTag,
  title,
  content,
  hasContent = true,
}) {
  return (
    <div className="rect-card-content">
      <div className="mb-4">
        <p className="mb-1">{date}</p>
        <div className="rect-card-tag d-flex align-items-center">
          <p className="me-2">
            {tags.map((tag, index) => (
              <span className="text-primary" key={index}>
                {tag}{' '}
              </span>
            ))}
          </p>
          {statusTag && (
            <p className="tag pill-sm tag-primary flex-shrink-0 fs-6 lh-base lh-md-1">
              {statusTag}
            </p>
          )}
        </div>
        <h3 className="rect-card-title mb-2">{title}</h3>
        {hasContent && (
          <p className="text-secondary multi-line-truncate">{content}</p>
        )}
      </div>
      <div className="mt-auto">
        <Link
          href={`/blog/${id}`}
          className="btn btn-lg pill btn-outline-secondary mt-auto"
        >
          閱讀內文
        </Link>
      </div>
    </div>
  );
}
