
class QuoteContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="quote-box" class="h-75 w-50 m-auto rounded">
                <p id="text">Together we can change the world, just one random act of kindness at a time.</p>
                <p id="author">Ron Hall</p>
                <button id="new-quote">New Quote</button>
                <a id="tweet-quote" href="https://twitter.com/intent/tweet?text=placeholder%20text" target="_blank">Tweet Quote</a>
            </div>
        );
    }
}


ReactDOM.render(<QuoteContainer />, document.getElementById("quote-box-container"));