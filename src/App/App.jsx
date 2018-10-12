import React from 'react';
import {hot} from 'react-hot-loader';
import {Controlled as CodeMirror} from 'react-codemirror2'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const options = {};
        return <CodeMirror
            value={this.state.value}
            options={options}
            onBeforeChange={(editor, data, value) => {
            this.setState({value});
        }}
            onChange={(editor, data, value) => {
            console.log(editor, data, value)
        }}/>;
    }
}

export default hot(module)(App);