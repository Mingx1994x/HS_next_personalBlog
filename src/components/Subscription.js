export default function Subscription() {
  return (
    <form className="subscription-form">
      <div className="form-content">
        <h3 className="display-main-title mb-4">訂閱電子報</h3>
        <p className="mb-6">立即訂閱，搶先掌握<span className="text-primary">前端 x 職涯</span>的獨家資訊！</p>
        <div className="d-flex flex-column">
          <input type="text" className="form-control mb-2" placeholder="請輸入您的大名" />
          <input type="text" className="form-control mb-6" placeholder="請輸入您的電子信箱" />
          <button type="button" className="btn btn-outline-primary">啟動訂閱</button>
        </div>
      </div>
    </form>
  )
}