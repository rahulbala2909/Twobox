import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Two extends React.Component {
  constructor(props){
    super(props);
    this.state={value:''}
    this.twoChange = this.twoChange.bind(this);
}
twoChange(event) {
    this.setState({value: event.target.value})
}  
render() {
  return (
    <div className="box">
        <form>
          <textarea onChange={this.twoChange} value={this.state.value}></textarea>
          <textarea value={this.state.value}></textarea>
        </form>
    </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Two/>);