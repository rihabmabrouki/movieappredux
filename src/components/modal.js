import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { addmovie, editmovie } from "../actions/action";

class Modale extends Component {
  state = {
    show: false,

    image: this.props.isEdit ? this.props.movie.image : "",
    name: this.props.isEdit ? this.props.movie.name : "",
    star: this.props.isEdit ? this.props.movie.star : "",
    info: this.props.isEdit ? this.props.movie.info : "",
    id: this.props.isEdit? this.props.movie.id : ""
  };
  handleShow = () => {
    this.setState({ show: !this.state.show });
  };
  add = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  addmovie = e => {
    e.preventDefault();
    this.setState({
      show: !this.state.show
    });
  };


  handleClick = () => {
    console.log('this.props.is', this.props.isEdit)
    this.props.isEdit
      ? this.props.editmovie(this.state)
      : this.props.addmovie({
          ...this.state,
          id: Date.now()
        });
  };

  render() {
    return (
      <div>
        <span  onClick={this.handleShow}>
          {this.props.isEdit ? <i className="far fa-edit" onClick={this.handleShow}/>: <button >+</button>}
        </span>

        <Modal
          
          show={this.state.show}
          onHide={this.handleShow}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add a new movie</Modal.Title>
          </Modal.Header>
          <div className="inputs">
            <Modal.Body>
              Movie name :{" "}
              <input
                type="text"
                placeholder=" Movie name..."
                onChange={this.add}
                name="name"
                value={this.state.name}
              />
            </Modal.Body>
            <Modal.Body>
              photo:{" "}
              <input
                type="text"
                placeholder=" Movie image.."
                onChange={this.add}
                name="image"
                value={this.state.image}
              />{" "}
            </Modal.Body>
            <Modal.Body>
              info :{" "}
              <input
                type="text"
                placeholder=" Movie..."
                onChange={this.add}
                name="info"
                value={this.state.info}
              />{" "}
            </Modal.Body>
            <Modal.Body>
              star :{" "}
              <input
                type="text"
                placeholder=" Movie..."
                onChange={this.add}
                name="star"
                value={this.state.star}
              />{" "}
            </Modal.Body>
          </div>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={this.handleClick}

              //   {this.props.isEdit?

              //     ()=> this.props.addmovie({
              //     ...this.state,
              //     ...this.setState({ show: false })
              //   })
              // }
            >
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addmovie: movie => dispatch(addmovie(movie)),
    editmovie: payload => dispatch(editmovie(payload))
  };
};
export default connect(null, mapDispatchToProps)(Modale);
