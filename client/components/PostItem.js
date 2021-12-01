import Link from 'next/link'

export default function PostItem({post}) {
    return (
        <div className="card h-100">
            <img src={post.imgUrl} className="card-img-top" />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text flex-grow-1">{post.textPreview}</p>
                <Link href='post/[id]' as={`post/${post._id}`}>
                    <a className="btn btn-primary">Read it!</a>
                </Link>
            </div>
        </div>
    )
}