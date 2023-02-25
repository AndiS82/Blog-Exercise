import { useEffect, useState } from "react"
import MiniArticle from "../components/article/MiniArticle"
import HeroHeader from "../components/HeroHeader"

const LandingPage = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetch('http://localhost:9999/api/posts')
            .then(response => response.json())
            .then(data => setArticles(data))
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <HeroHeader title="Der beste Blog" />
            <h1>HOME</h1>
            <main className="flex flex-row p-10">
                {
                    articles.map((element, key) => <MiniArticle key={key} article={element} id={key} />)
                }
            </main>

        </>

    )
}

export default LandingPage