// Load quotes from array into local storage
loadQuotesToLocalStorage();

// Component that will display quote and author with ability to tweet the quote or generate a new one
class QuoteContainer extends React.Component {
    // Load constructor and inital state
    constructor(props) {
        super(props);
        this.state = {
            quote: "",
            author: "",
            quoteIndex: 0
        }
        this.handleQuoteGeneration = this.handleQuoteGeneration.bind(this);
    }
    
    //Function that will pull quotes from local storage and set the state to a random quote
    handleQuoteGeneration() {
        let quotesArr = JSON.parse(localStorage.getItem("quotes"));
        let randomNum;

        //Prevents the same quote from being shown consecutively 
        do {
            randomNum = Math.floor(Math.random() * quotesArr.length);
        } while(randomNum === this.state.quoteIndex);

        this.setState({
            quote: quotesArr[randomNum].quote,
            author: quotesArr[randomNum].author,
            quoteIndex: randomNum
        });
    }

    //Load a random quote into state before component is rendered
    componentDidMount() {
        this.handleQuoteGeneration();
    }

    //Render component
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

//Function that loads quotes into local storage from an array
function loadQuotesToLocalStorage() {
    const quotesArr = [
        { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
        { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
        { quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.", author: "Steve Jobs" },
        { quote: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" }
    ];

    localStorage.setItem("quotes", JSON.stringify(quotesArr));
}

//Function that takes a quote object and concats it to a Twitter URL so that user can easily tweet the quote
function tweetQuoteURL(quoteInfo) {
    const twitterURL = "https://twitter.com/intent/tweet?text=";
    return twitterURL + '"' + quoteInfo.quote.replace(/\s/g, "%20") + '" - ' + quoteInfo.author;
}

// Render component into DOM
ReactDOM.render(<QuoteContainer />, document.getElementById("quote-box-container"));