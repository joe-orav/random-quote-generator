import React from 'react';
import refreshIcon from "./img/refresh-icon.png";
import twitterLogo from "./img/twitter-logo.png";

class QuoteContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: [],
            selectedQuote: null
        }
        this.handleQuoteGeneration = this.handleQuoteGeneration.bind(this);
    }

    handleQuoteGeneration() {
        let randomNum;

        if (this.state.selectedQuote === null) {
            randomNum = Math.floor(Math.random() * this.state.quotes.length);
        } else {
            do {
                randomNum = Math.floor(Math.random() * this.state.quotes.length);
            } while (randomNum === this.state.selectedQuote.index)
        }

        this.setState({
            selectedQuote: {
                text: this.state.quotes[randomNum].text,
                author: this.state.quotes[randomNum].author ? this.state.quotes[randomNum].author : "Unknown",
                index: randomNum
            }
        });

    }

    tweetQuoteURL(quoteInfo) {
        const twitterURL = "https://twitter.com/intent/tweet?text=";
        return twitterURL + '"' + quoteInfo.text.replace(/\s/g, "%20") + '" - ' + quoteInfo.author;
    }

    componentDidMount() {
        if (this.state.quotes.length === 0) {
            fetch("https://type.fit/api/quotes")
                .then((res) => res.json())
                .then((data) => this.setState({
                    quotes: data
                }))
                .then(() => this.handleQuoteGeneration());
        }
    }

    render() {
        return this.state.selectedQuote === null ? <div className="text-white text-center">Loading Quote...</div> :
            (<div id="quote-box" className="w-auto m-auto rounded bg-light d-flex flex-column">
                <div id="quote-info" className="my-auto">
                    <p id="text" className="px-4 pt-4 pb-1 text-center">{this.state.selectedQuote.text}</p>
                    <p id="author" className="text-right mr-5">{this.state.selectedQuote.author}</p>
                </div>
                <div id="quote-controls" className="d-flex flex-row justify-content-between pl-4 pr-4">
                    <button id="new-quote" className="btn btn-primary mb-3" onClick={this.handleQuoteGeneration}><img src={refreshIcon} alt="New Quote" title="New Quote" /></button>
                    <a id="tweet-quote" href={this.tweetQuoteURL(this.state.selectedQuote)} target="_blank" rel="noopener noreferrer" className="btn btn-primary mb-3"><img src={twitterLogo} alt="Tweet Quote" title="Tweet Quote" /></a>
                </div>
            </div>);
    }
}

export default QuoteContainer
