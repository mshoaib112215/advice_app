import React from 'react'
import axios from 'axios'

export class App extends React.Component {
    state = {advice: ''};
    
    componentDidMount(){
        this.fetchData();
        
    }
    
    fetchData = ()=>{
        
        axios.get("https://api.adviceslip.com/advice")
            .then((res)=>{
                
                this.setState({
                    advice: res.data.slip.advice
                })
                
            })
            .catch((err)=>{
                console.log(err);

            })
        
            
    }

  render() {
    return (
        
            <div className="app">
                <div className="title">Advice API Tester</div>
                <div className="card">
                    <h1 className="app__advice">
                        {this.state.advice}
                    </h1>
                    
                    <button className = "app__advice-btn" onClick={this.fetchData}><span>Get New Advice!</span></button>
                </div>                
            </div>
        
    )
  }
}

export default App