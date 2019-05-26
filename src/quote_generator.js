
class QuoteContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="quote-box" class="h-75 w-50 m-auto rounded bg-light">
                <p id="text" class="pl-4 pt-4 pr-4 pb-1 text-center">"Together we can change the world, just one random act of kindness at a time."</p>
                <p id="author" class="text-right mr-5">Ron Hall</p>
                <div class="text-center">
                    <button id="new-quote" class="btn btn-primary mb-3">New Quote</button>
                </div>
                {/*<a id="tweet-quote" href="https://twitter.com/intent/tweet?text=placeholder%20text" target="_blank">Tweet Quote</a>*/}
            </div>
        );
    }
}

ReactDOM.render(<QuoteContainer />, document.getElementById("quote-box-container"));