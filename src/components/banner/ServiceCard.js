export default function ServiceCard({ cardData, isLastOne }) {

  const { imgName, title, content, isRowReverse } = cardData;
  return (
    <li className={`service-content row d-flex flex-column ${isRowReverse ? 'flex-md-row-reverse' : 'flex-md-row'} ${isLastOne ? 'mb-0' : ''}`}>
      <div className={`col-md-6 ${isRowReverse ? '' : 'ms-auto'}`}>
        <img src={`/images/${imgName}`} className="img-fluid" alt={title} />
      </div>
      <div className={`col-md-5 ${isRowReverse ? 'ms-auto' : ''} d-flex align-items-center`}>
        <div className={`service-wrapper ${isRowReverse ? 'slide-right' : 'slide-left'}`}>
          <h3 className="service-title mb-2">{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    </li>
  )
}