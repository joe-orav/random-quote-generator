var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Load quotes from array into local storage
loadQuotesToLocalStorage();

// Component that will display quote and author with ability to tweet the quote or generate a new one

var QuoteContainer = function (_React$Component) {
    _inherits(QuoteContainer, _React$Component);

    // Load constructor and inital state
    function QuoteContainer(props) {
        _classCallCheck(this, QuoteContainer);

        var _this = _possibleConstructorReturn(this, (QuoteContainer.__proto__ || Object.getPrototypeOf(QuoteContainer)).call(this, props));

        _this.state = {
            quote: "",
            author: ""
        };
        _this.handleQuoteGeneration = _this.handleQuoteGeneration.bind(_this);
        return _this;
    }

    //Function that will pull quotes from local storage and set the state to a random quote


    _createClass(QuoteContainer, [{
        key: "handleQuoteGeneration",
        value: function handleQuoteGeneration() {
            var quotesArr = JSON.parse(localStorage.getItem("quotes"));

            var randomNum = Math.floor(Math.random() * quotesArr.length);

            this.setState({
                quote: quotesArr[randomNum].quote,
                author: quotesArr[randomNum].author
            });
        }

        //Load a random quote into state before component is rendered

    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.handleQuoteGeneration();
        }

        //Render component

    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "quote-box", className: "h-75 w-auto m-auto rounded bg-light" },
                React.createElement(
                    "p",
                    { id: "text", className: "pl-4 pt-4 pr-4 pb-1 text-center" },
                    this.state.quote
                ),
                React.createElement(
                    "p",
                    { id: "author", className: "text-right mr-5" },
                    this.state.author
                ),
                React.createElement(
                    "div",
                    { className: "d-flex flex-row justify-content-between pl-4 pr-4" },
                    React.createElement(
                        "button",
                        { id: "new-quote", className: "btn btn-primary mb-3", onClick: this.handleQuoteGeneration },
                        React.createElement("img", { src: "img/refresh-icon.png", alt: "New Quote", title: "New Quote" })
                    ),
                    React.createElement(
                        "a",
                        { id: "tweet-quote", href: tweetQuoteURL(this.state), target: "_blank", className: "btn btn-primary mb-3" },
                        React.createElement("img", { src: "img/twitter-logo.png", alt: "Tweet Quote", title: "Tweet Quote" })
                    )
                )
            );
        }
    }]);

    return QuoteContainer;
}(React.Component);

//Function that loads quotes into local storage from an array


function loadQuotesToLocalStorage() {
    var quotesArr = [{ quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" }, { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" }, { quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.", author: "Steve Jobs" }, { quote: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" }];

    localStorage.setItem("quotes", JSON.stringify(quotesArr));
}

//Function that takes a quote object and concats it to a Twitter URL so that user can easily tweet the quote
function tweetQuoteURL(quoteInfo) {
    var twitterURL = "https://twitter.com/intent/tweet?text=";
    return twitterURL + '"' + quoteInfo.quote.replace(/\s/g, "%20") + '" - ' + quoteInfo.author;
}

// Render component into DOM
ReactDOM.render(React.createElement(QuoteContainer, null), document.getElementById("quote-box-container"));