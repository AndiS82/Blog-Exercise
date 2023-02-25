import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Article = () => {
    const { id } = useParams()
    const [article, setArticle] = useState({})

    useEffect(() => {
        fetch(`http://localhost:9999/api/posts/${id}`)
            .then(response => response.json())
            .then(data => setArticle(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <article>
            <img src={`http://localhost:9999/${article.path}`} alt="" />
            <h2>{article.title}</h2>
        </article>
    )
}

export default Article