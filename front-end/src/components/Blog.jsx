import { blogsList } from "../helpers/blogData"
export default function Blog() {
	return (
		<article className='active' data-page="blog">

			<header>
				<h2 className="h2 article-title">Blog</h2>
			</header>

			<section className="blog-posts">

				<ul className="blog-posts-list">
					{blogsList.map(blog => (
						<li className="blog-post-item" key={blog.id}>
							<a href="/">
								<figure className="blog-banner-box">
									<img src={blog.src} alt={blog.title} loading="lazy" />
								</figure>

								<div className="blog-content">

									<div className="blog-meta">
										<p className="blog-category">{blog.category}</p>

										<span className="dot"></span>

										<time dateTime="2022-02-23">{blog.date}</time>
									</div>

									<h3 className="h3 blog-item-title">{blog.title}</h3>

									<p className="blog-text">{blog.text}</p>
								</div>
							</a>
						</li>
					))}
				</ul>

			</section>

		</article>
	)
}
