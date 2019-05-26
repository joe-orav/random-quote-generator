
class QuoteContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="quote-box" class="h-75 w-50 m-auto rounded bg-light">
                <p id="text" class="pl-4 pt-4 pr-4 pb-1 text-center">"Together we can change the world, just one random act of kindness at a time."</p>
                <p id="author" class="text-right mr-5">Ron Hall</p>
                <div class="d-flex flex-row justify-content-between pl-4 pr-4">
                    <button id="new-quote" class="btn btn-primary mb-3"><img src="/img/refresh-icon.png" alt="New Quote" title="New Quote" /></button>
                    <a id="tweet-quote" href="https://twitter.com/intent/tweet?text=placeholder%20text" target="_blank" class="btn btn-primary mb-3"><img src="/img/twitter-logo.png" alt="Tweet Quote" title="Tweet Quote"/></a>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<QuoteContainer />, document.getElementById("quote-box-container"));