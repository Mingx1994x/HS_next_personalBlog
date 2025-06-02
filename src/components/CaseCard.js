export default function CaseCard({ cardData }) {
  const { imgName, title, lists } = cardData;
  return (
    <div className="case-card col-md-3">
      <img src={`/images/${imgName}`} alt="" className="case-card-avatar" />
      <div className="case-card-content">
        <h3 className="case-card-title mb-auto">{title}</h3>
        <ul className="list-unstyled h-100">
          {lists.map((list, index) => (
            <li className={`text-secondary ${index === lists.length - 1 ? '' : 'mb-2'}`} key={index}>
              <i className="bi bi-check-square-fill text-primary me-2"></i>{list}
            </li>
          ))}
        </ul>
      </div>
      <button type="button" className="btn btn-lg pill-btn btn-outline-secondary">前往聆聽 podcast</button>
    </div>
  )
}