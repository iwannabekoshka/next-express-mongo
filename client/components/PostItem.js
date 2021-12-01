import Link from 'next/link'

export default function PostItem() {
    return (
        <div className="card">
            <img src="https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link href="post/1">
                <a className="btn btn-primary">Go somewhere</a>
            </Link>
            </div>
        </div>
    )
}