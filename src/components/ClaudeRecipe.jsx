import ReactMarkdown from 'react-markdown'

export default function ClaudeRecipe(props){
    if (props.loading) {
        return (
            <section className='suggested-recipe-container'>
                <div className="spinner-container">
                    <div className="spinner"></div>
                    <div className="loading-text">Chef AI is cooking up your recipe...</div>
                </div>
            </section>
        )
    }
    return(
        <section className='suggested-recipe-container'>
            <h2>Chef AI recommends:</h2>
            <div className="recipe-markdown">
                <ReactMarkdown>
                    {props.recipe}
                </ReactMarkdown>
            </div>
        </section>
    )
}