loadQuotesToLocalStorage();

class QuoteContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: "",
            author: ""
        }
        this.handleQuoteGeneration = this.handleQuoteGeneration.bind(this);
    }
    
    handleQuoteGeneration() {
        let quotesArr = JSON.parse(localStorage.getItem("quotes"));

        let randomNum = Math.floor(Math.random() * quotesArr.length);

        this.setState({
            quote: quotesArr[randomNum].quote,
            author: quotesArr[randomNum].author
        });
    }

    componentDidMount() {
        this.handleQuoteGeneration();
    }

    render() {
        return (
            <div id="quote-box" className="h-75 w-auto m-auto rounded bg-light">
                <p id="text" className="pl-4 pt-4 pr-4 pb-1 text-center">{this.state.quote}</p>
                <p id="author" className="text-right mr-5">{this.state.author}</p>
                <div className="d-flex flex-row justify-content-between pl-4 pr-4">
                    <button id="new-quote" className="btn btn-primary mb-3" onClick={this.handleQuoteGeneration}><img src="img/refresh-icon.png" alt="New Quote" title="New Quote" /></button>
                    <a id="tweet-quote" href={tweetQuoteURL(this.state)} target="_blank" className="btn btn-primary mb-3"><img src="img/twitter-logo.png" alt="Tweet Quote" title="Tweet Quote" /></a>
                </div>
            </div>
        );
    }
}

function loadQuotesToLocalStorage() {
    const quotesArr = [
        { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
        { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
        { quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.", author: "Steve Jobs" },
        { quote: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" }
    ];

    localStorage.setItem("quotes", JSON.stringify(quotesArr));
}

function tweetQuoteURL(quoteInfo) {
    const twitterURL = "https://twitter.com/intent/tweet?text=";
    return twitterURL + '"' + quoteInfo.quote.replace(/\s/g, "%20") + '" - ' + quoteInfo.author;
}

ReactDOM.render(<QuoteContainer />, document.getElementById("quote-box-container"));