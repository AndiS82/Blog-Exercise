import { Link } from "react-router-dom"

const MiniArticle = ({ article, id }) => {
    const deletePost = (i) => {
        fetch(`http://localhost:9999/api/posts/${i}`, {
            method: "DELETE",
        }).then(res => res.json())
            .then(data => setArticles(data))
    };
    return (
        <section>
            <Link to={`/details/${id}`}>
                <article className=" w-1/4">
                    <img className="w-full" src={`http://localhost:9999/${article.path}`} alt={article.title} />
                    <h3>{article.title}</h3>
                </article>
                <button onClick={() => deletePost()}></button>
            </Link>
        </section>
    )
}

export default MiniArticle