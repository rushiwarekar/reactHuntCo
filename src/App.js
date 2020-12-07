import React, { Component } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "College Hunt",
      act: 0,
      index: "",
      datas: [],
    };
  }

  componentDidMount() {}

  fsubmit = (e) => {
    e.preventDefault();
    console.log("try");

    let datas = this.state.datas;
    let collegeName = this.refs.collegeName.value;
    let status = this.refs.status.value;

    if (this.state.act === 0) {
      let data = {
        collegeName,
        status,
      };
      datas.push(data);
    } else {
      let index = this.state.index;
      datas[index].collegeName = collegeName;
      datas[index].status = status;
    }

    this.setState({
      datas: datas,
      act: 0,
    });

    this.refs.myForm.reset();
    this.refs.collegeName.focus();
  };
  fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i, 1);
    this.setState({
      datas: datas,
    });
    this.refs.myForm.reset();
    this.refs.collegeName.focus();
  };

  fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.collegeName.value = data.collegeName;
    this.refs.status.value = data.status;

    this.setState({
      act: 1,
      index: i,
    });

    this.refs.collegeName.focus();
  };

  render() {
    let datas = this.state.datas;
    return (
      <>
        <div className="App">
          <h2>{this.state.title}</h2>

          <form ref="myForm" className="myForme">
            <input
              type="text"
              id="collegeName"
              ref="collegeName"
              placeholder="Enter College Name"
              className="formFild"
            />
            <div className="dropLeble">
              <label for="status">Choose Status:</label>
            </div>
            <select ref="status" id="status" name="status" className="formFild">
              <ArrowDropDownIcon />
              <option value="applied">Applied</option>
              <option value="shortlisted">Shortlisted</option>
              <option value="selected">Selected</option>
              <option value="Rejected">Rejected</option>
            </select>

            <button
              className="myButton"
              onClick={(e) => this.fsubmit(e)}
              className="myButton"
            >
              <AddIcon />
            </button>
          </form>

          {datas.map((data, i) => (
            <ol key={i} className="myList">
              {i + 1} {data.collegeName} {data.status}
              <button className="myButton1" onClick={() => this.fRemove(i)}>
                <DeleteIcon />
              </button>
              <button className="myButton2" onClick={() => this.fEdit(i)}>
                <EditIcon />
              </button>
            </ol>
          ))}
        </div>
      </>
    );
  }
}

export default App;
