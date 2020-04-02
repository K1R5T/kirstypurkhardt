import React, {Component} from 'react';
import Navbar from './Navbar';


class ToDo extends Component {
  state = {
      lists: [
          {content: "" },
      ],
      dates:[
          {date: "09/03/2020"}
      ],
      currentList: {content: "" },
      currentDate: {date: ""}
  }

  recordListHandler = (e) => {
      this.setState({
          currentList: {content: e.target.value }
      })
  }

  recordDateHandler = (e) => {
    this.setState({
        currentDate: {content: e.target.value }
    })
}

  addListHandler = () => {
      this.setState({
          lists: [...this.state.lists, this.state.currentList],
          currentList: {content: "" }
      })
  }

  addDateHandler = () => {
    this.setState({
        dates: [...this.state.dates, this.state.currentDate],
        currentDate: {content: "" }
    })
}

  render() {
      const fullList = this.state.lists.map((lists, dates, index) => {
          return <ul key={index}>
          <p>{lists.content}</p>
          <p>{dates.content}</p>
          </ul>
          }
      )

      return (
      <div className="viewlistContainer">
          <Navbar/>
          <div className="viewlist">
          <h1>To Do List</h1>
          <div>
              This is my to do list, there is still a few problems and I want to add the date selection option but for now this was a quick simple project that I thought would be cool to display.
          </div>
          <div>
            <input className="taskInput" onChange={this.recordListHandler} value={this.state.currentList.content} placeholder="Task"></input>
            <button className="submit-btn" onClick={this.addListHandler}>Submit</button>
          </div>

          <div className="fullList">
            <ul>
                {fullList}
            </ul>
          </div>
          </div>
      </div>
      )
  }

}

export default ToDo;