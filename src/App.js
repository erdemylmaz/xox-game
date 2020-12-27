import React from "react";
import "./App.css";
import Game from "./game";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.game = new Game();
  }

  componentDidMount() {
    setInterval(() => {
      this.game.update();
      this.setState({});
    }, 100);
  }

  update() {
    this.game.update();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.game.players.isFirstPlayersTurn ? (
            <h1>First Players Turn : X</h1>
          ) : (
            <h1>Second Players Turn : O</h1>
          )}
        </header>
        <div>
          <table>
            <tbody>
              <tr>
                <td>
                  <div id="1" className="box" onClick={this.game.onClick}>
                    {this.game.contents[0].content}
                  </div>
                </td>
                <td>
                  <div id="2" className="box" onClick={this.game.onClick}>
                    {this.game.contents[1].content}
                  </div>
                </td>
                <td>
                  <div id="3" className="box" onClick={this.game.onClick}>
                    {this.game.contents[2].content}
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div id="4" className="box" onClick={this.game.onClick}>
                    {this.game.contents[3].content}
                  </div>
                </td>
                <td>
                  <div onClick={this.game.onClick} id="5" className="box">
                    {this.game.contents[4].content}
                  </div>
                </td>
                <td>
                  <div id="6" className="box" onClick={this.game.onClick}>
                    {this.game.contents[5].content}
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div id="7" className="box" onClick={this.game.onClick}>
                    {this.game.contents[6].content}
                  </div>
                </td>
                <td>
                  <div id="8" className="box" onClick={this.game.onClick}>
                    {this.game.contents[7].content}
                  </div>
                </td>
                <td>
                  <div id="9" className="box" onClick={this.game.onClick}>
                    {this.game.contents[8].content}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
