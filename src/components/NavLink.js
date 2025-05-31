import Link from "next/link"

export default function NavLink() {
  return (
    <nav className="container">
      <div className="d-flex justify-content-center">
        <Link href='/' className="nav-link">首頁</Link>
        <Link href='/blog' className="nav-link">部落格</Link>
      </div>
    </nav>
  )
}