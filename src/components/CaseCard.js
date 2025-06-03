export default function CaseCard({ cardData }) {
  const { imgName, title, lists } = cardData;
  return (
    <div className="case-card">
      <div className="flex-shrink-0">

        <img src={`/images/${imgName}`} alt="" className="case-card-avatar" />
      </div>
      <div className="case-card-content flex-grow-1">
        <h3 className="case-card-title">{title}</h3>
        <ul className="list-unstyled">
          {lists.map((list, index) => (
            <li className={`text-secondary ${index === lists.length - 1 ? 'mb-auto' : 'mb-2'}`} key={index}>
              <i className="bi bi-check-square-fill text-primary me-2"></i>{list}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-shrink-0">
        <button type="button" className="btn btn-lg pill-btn btn-outline-secondary">前往聆聽 podcast</button>
      </div>
    </div>
  )
}