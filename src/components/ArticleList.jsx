import Article from "./Article.jsx"


 const articles = [
        {
            id: 1,
            title: "My First Article",
            date: "2024-06-01",
            preview: "First article"
        },

        {
            id: 2,
            title: "My Second Article",
            date: "2024-06-02",
            preview: "Second article"
        }
        ]

function ArticleList() {
   
    return (
        <main>
                {articles.map(article => (
                <Article key={article.id} title={article.title} date={article.date} preview={article.preview} />
            ))}
        </main>
    )
}


export default ArticleList