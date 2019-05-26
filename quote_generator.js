var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuoteContainer = function (_React$Component) {
    _inherits(QuoteContainer, _React$Component);

    function QuoteContainer(props) {
        _classCallCheck(this, QuoteContainer);

        return _possibleConstructorReturn(this, (QuoteContainer.__proto__ || Object.getPrototypeOf(QuoteContainer)).call(this, props));
    }

    _createClass(QuoteContainer, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "quote-box", "class": "h-75 w-50 m-auto rounded bg-light" },
                React.createElement(
                    "p",
                    { id: "text", "class": "pl-4 pt-4 pr-4 pb-1 text-center" },
                    "\"Together we can change the world, just one random act of kindness at a time.\""
                ),
                React.createElement(
                    "p",
                    { id: "author", "class": "text-right mr-5" },
                    "Ron Hall"
                ),
                React.createElement(
                    "div",
                    { "class": "d-flex flex-row justify-content-between pl-4 pr-4" },
                    React.createElement(
                        "button",
                        { id: "new-quote", "class": "btn btn-primary mb-3" },
                        React.createElement("img", { src: "/img/refresh-icon.png", alt: "New Quote", title: "New Quote" })
                    ),
                    React.createElement(
                        "a",
                        { id: "tweet-quote", href: "https://twitter.com/intent/tweet?text=placeholder%20text", target: "_blank", "class": "btn btn-primary mb-3" },
                        React.createElement("img", { src: "/img/twitter-logo.png", alt: "Tweet Quote", title: "Tweet Quote" })
                    )
                )
            );
        }
    }]);

    return QuoteContainer;
}(React.Component);

ReactDOM.render(React.createElement(QuoteContainer, null), document.getElementById("quote-box-container"));