import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand">Koshkas</a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-list" aria-controls="nav-list" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="nav-list">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link active">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about">
                                <a className="nav-link active">About</a>
                            </Link>
                        </li>
                        <li className="nav-item ms-5">
                            <Link href="/add-post">
                                <a class="btn btn-primary">Add post</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}