
class QuoteContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: "Together we can change the world, just one random act of kindness at a time.",
            author: "Ron Hall"
        }
    }
    render() {
        return (
            <div id="quote-box" className="h-75 w-50 m-auto rounded bg-light">
                <p id="text" className="pl-4 pt-4 pr-4 pb-1 text-center">{this.state.quote}</p>
                <p id="author" className="text-right mr-5">{this.state.author}</p>
                <div className="d-flex flex-row justify-content-between pl-4 pr-4">
                    <button id="new-quote" className="btn btn-primary mb-3"><img src="/img/refresh-icon.png" alt="New Quote" title="New Quote" /></button>
                    <a id="tweet-quote" href={convertToTwitterURL(this.state.quote)} target="_blank" className="btn btn-primary mb-3"><img src="/img/twitter-logo.png" alt="Tweet Quote" title="Tweet Quote"/></a>
                </div>
            </div>
        );
    }
}

function convertToTwitterURL(quote) {
    const twitterURL = "https://twitter.com/intent/tweet?text=";
    return twitterURL + quote.replace(/\s/g, "%20");
}

ReactDOM.render(<QuoteContainer />, document.getElementById("quote-box-container"));