ReactDOM.render(<div><h1>h1</h1><h1>h11</h1></div>
, document.getElementById('root'))

ReactDOM.render(<ul><li>1</li><li>2</li></ul>
, document.getElementById('root'))

function Page() {
    return (
        <div>
            <h1>hi</h1>
            <h2>hello</h2>
        </div>
    )
}
ReactDOM.render(<Page />, document.getElementById('root'))

