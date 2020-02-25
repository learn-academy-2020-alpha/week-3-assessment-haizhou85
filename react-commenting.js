// ASSESSMENT 3: React Commenting Challenge
// Add comments to the React Robot Listening Challenge
// Explain the purpose and functionality of the code directly below the 10 comment tags


// App.js
class App extends Component{
  constructor(){
    super()
    // 1.create a state object to store user input
    this.state = {
      userInput: "",
    }
  }

  robot = (e) => {
    // 2.create a method to update user input to state
    this.setState({ userInput: e.target.value})
  }

  render(){
    // 3.destructuring the state object
    let { userInput } = this.state

    return(
      <div>
        <h1>Robot Challenge</h1>

        <h3>Enter text here:</h3>
        <input
          {/* 4.call the method to store what enters in input box */}
          onChange={ this.robot }
          {/* 5.set the value to userInput*/}
          value={ userInput }
        />

        <div>
          {/* 6.place Goodrobot component */}
          <GoodRobot
            {/* 7.pass userInput to props */}
            userInput={ userInput }
          />
          <BadRobot
            userInput={ userInput }
          />
          <KanyeBot
            userInput={ userInput }
          />
        </div>
      </div>
    )
  }
}
export default App


// GoodRobot.js
class GoodRobot extends Component{
  render(){
    return(
      // 8.render the robot component
      <div>
        <h3>Good Robot</h3>
        {/* 9. display what user enters in props */}
        <h4>I hear you saying { this.props.userInput }. Is that correct?</h4>
      </div>
    )
  }
}
// 10.close the component
export default GoodRobot
