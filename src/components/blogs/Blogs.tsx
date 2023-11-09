export default function Blogs () {

    const blogs = [
        {
            name: "Blog1",
            url: "blog1"
        }
    ]

    return (
        <div>
            {blogs.map(blog => (

                <div key={blog.url}>
                    <a href={`blog/${blog.url}`}><h2>{blog.name}</h2></a>
                </div>
            ))}
        </div>
    )
}