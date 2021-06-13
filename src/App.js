import './App.css';
import React from 'react'
import ReactDOM from "react-dom";

class App extends React.Component{

  constructor() {
    super();
    this.state = {
      // arena: [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
      arena: [[null, null, null],
        [null, null, null],
        [null, null, null]],
      // arena: [['#', 'o', '#'], ['#', 'o', '#'], ['#', 'o', '#']],
      xs_turn: true,
      filled_places:0,
      game_finished: false,
      game_result_message: "",
      arena_colors: [["bisque_color", "bisque_color", "bisque_color"],
        ["bisque_color", "bisque_color", "bisque_color"],
        ["bisque_color", "bisque_color", "bisque_color"]],
    }
  }

  render(){

    var rows = []
    for (let i = 0; i <this.state.arena.length; i++) {
      var cols = []
      for (let j = 0; j < this.state.arena[i].length; j++) {
        cols.push(<td className={this.state.arena_colors[i][j]} data-key={[i,j]} onClick={this.handleClick}> {this.state.arena[i][j] == null?" ": this.state.arena[i][j]} </td>)
      }
      rows.push(<tr> {cols} </tr>)
    }

    var aa = <h3>hi </h3>
    return (
        <div className="App">

          <canvas id="myCanvas"> </canvas>

          <h1> Tic Tac Toe </h1>

          <table id="tic_tac_toe_arena">
            {rows}
          </table>

          <h3 id="game_result"> {this.state.game_result_message} </h3>

          <button id="reset_game" onClick={this.resetGame}> Reset Game </button>


        </div>
    );
  }

  handleClick = (event)=>{
    if (this.state.game_finished){
      return
    }
    this.setState(oldState =>{
      var new_arena = [...oldState.arena]
      const i = parseInt(event.target.dataset.key.split(',')[0]);
      const j = parseInt(event.target.dataset.key.split(',')[1]);
      if (!(new_arena[i][j] === null)){
        console.log("early return ):")
        return
      }
      new_arena[i][j] = this.state.xs_turn? 'x': 'o'
      console.log("new arena", new_arena)
      return {
        arena: [...new_arena],
        xs_turn: !oldState.xs_turn,
        filled_places: oldState.filled_places + 1
      }
    }, this.checkGameStatus)
  }

  checkGameStatus = ()=>{
    console.log("checking primary diagonal")
    this.checkPrimaryDiagonal()}

  checkPrimaryDiagonal = ()=> {
    //check principal diagonal
    if (!((this.state.arena[0][0] === null) || (this.state.arena[1][1] === null) || (this.state.arena[2][2] === null))
        && (this.state.arena[0][0] === this.state.arena[1][1])
        && (this.state.arena[0][0] === this.state.arena[2][2])) {
      this.setState(oldState => {

        var new_arena_colors = [...oldState.arena_colors]
        new_arena_colors[0][0] = "green_color"
        new_arena_colors[1][1] = "green_color"
        new_arena_colors[2][2] = "green_color"

        return {
          game_finished: true,
          game_result_message: `Player ${this.state.xs_turn ? "o" : "x"} won!! `,
          arena_colors: [...new_arena_colors]
        }
      }, this.checkOtherDiagonal)
    }else {
      this.checkOtherDiagonal()
    }
  }

  checkOtherDiagonal = ()=> {
    // check other diagonal
    console.log("checking other diagonal")
    if (!((this.state.arena[2][0] === null) || (this.state.arena[1][1] === null) || (this.state.arena[0][2] === null))
        && (this.state.arena[2][0] === this.state.arena[1][1])
        && (this.state.arena[2][0] === this.state.arena[0][2])) {

      this.setState(oldState => {
        var new_arena_colors = [...oldState.arena_colors]
        new_arena_colors[2][0] = "green_color"
        new_arena_colors[1][1] = "green_color"
        new_arena_colors[0][2] = "green_color"
        return {
          game_finished: true,
          game_result_message: `Player ${this.state.xs_turn ? "o" : "x"} won!! `,
          arena_colors: [...new_arena_colors]
        }
      }, this.checkColumns)
    }else {
      this.checkColumns()
    }
  }

  checkColumns = ()=>{
    console.log("checking cols")
    // rows and columns ...
    for (let i = 0; i < this.state.arena.length; i++) {
      if (!( (this.state.arena[0][i] === null) || (this.state.arena[1][i] === null) || (this.state.arena[2][i] === null))
          && (this.state.arena[0][i] === this.state.arena[1][i])
          && (this.state.arena[0][i] === this.state.arena[2][i])){
        this.setState(oldState=>{
          console.log("won the game, setting game finihsed")
          var new_arena_colors = [...oldState.arena_colors]
          new_arena_colors[0][i] = "green_color"
          new_arena_colors[1][i] = "green_color"
          new_arena_colors[2][i] = "green_color"
          return {
            game_finished: true,
            game_result_message: `Player ${this.state.xs_turn?"o":"x"} won!! `,
            arena_colors: [...new_arena_colors]
          }
        }, this.checkRows)

        return // break the flow
      }
    }

    this.checkRows()

  }

  checkRows = ()=>{
    console.log("checking rows")
    // rows and columns ...
    for (let i = 0; i < this.state.arena.length; i++) {
      if ( !( (this.state.arena[i][0] === null) || (this.state.arena[i][1] === null) || (this.state.arena[i][2] === null))
          && (this.state.arena[i][0] === this.state.arena[i][1])
          && (this.state.arena[i][0] === this.state.arena[i][2])){

        this.setState(oldState=>{
          var new_arena_colors = [...oldState.arena_colors]
          new_arena_colors[i][0] = "green_color"
          new_arena_colors[i][1] = "green_color"
          new_arena_colors[i][2] = "green_color"
          return {
            game_finished: true,
            game_result_message: `Player ${this.state.xs_turn?"o":"x"} won!! `,
            arena_colors: [...new_arena_colors]
          }

        }, this.checkDraw)
        return // break the flow here
      }
    }

    // if none of the above worked
    this.checkDraw()

  }

  checkDraw = ()=>{
    console.log("game finished?? ", this.state.game_finished)
    console.log("game filled_places ", this.state.filled_places)

    if ( !this.state.game_finished && this.state.filled_places === 9){
      this.setState({
        arena_colors: [["gray_color", "gray_color", "gray_color"],
          ["gray_color", "gray_color", "gray_color"],
          ["gray_color", "gray_color", "gray_color"]],
      })
    }
    console.log("game finished again?? ", this.state.game_finished)
  }

  resetGame = ()=>{
    this.setState({
      arena: [[null, null, null], [null, null, null], [null, null, null]],
      game_finished: false,
      xs_turn: true,
      filled_places:0,
      arena_colors: [["bisque_color", "bisque_color", "bisque_color"],
        ["bisque_color", "bisque_color", "bisque_color"],
        ["bisque_color", "bisque_color", "bisque_color"]],
    })

    // console.log(document.querySelector("#tic_tac_toe_arena"))
    // var tt = document.querySelector("#tic_tac_toe_arena")
    // for (let i = 0; i < tt.rows.length; i++) {
    //   var row = tt.rows[i]
    //   for (let j = 0; j < row.cells.length; j++) {
    //     var elem = row.cells[j]
    //     console.log("elem at ", i, j, " is:: ", elem)
    //     if(i==0 && j==0)
    //     elem.setAttribute("class", "gray_color")
    //   }
    // }n

  }


}

export default App;
