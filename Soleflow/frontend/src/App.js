import React from 'react';
import './App.css';
import { connect } from "react-redux"
import { Navbar, Row, Col, ListGroup, Form, Button, FormControl } from "react-bootstrap"
import { bindActionCreators } from 'redux';
import { getAll, postData, ratingPost, postComment } from "./actions/postAction"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      comment: "",
    };
  }
  componentDidMount() {
    this.props.getAll()
  }
  handleClick = () => {
    if (this.state.title !== "") {
      let data = { title: this.state.title }
      this.props.postData(data)
      this.setState({ title: "" })
    } else {
      alert("Please enter a valid Post")
    }
  }
  handleComment = async (id) => {
    if (this.state.comment !== "") {
      let data = {
        id, comment: this.state.comment
      }
      await this.props.postComment(data)
      this.setState({ comment: "" })
      await this.props.getAll()
    } else {
      alert("Please enter a valid comment")
    }
  }
  handleRating = (type, id) => {
    this.props.ratingPost(type, id)
  }
  render() {
    console.log("state", this.state.title, this.state.comment)
    console.log("Show psots", this.props.posts)
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Home</Navbar.Brand>
        </Navbar>
        <div className="container mt-5">
          <Row>
            <Col className="navigation" >
              <ListGroup className="list-group" variant="flush">
                <ListGroup.Item>Home</ListGroup.Item>
                <ListGroup.Item>About Us</ListGroup.Item>
                <ListGroup.Item>Privacy</ListGroup.Item>
                <ListGroup.Item>Contact Us</ListGroup.Item>
                <ListGroup.Item>Copyrigth 2020</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col className="post" xs={6}>
              <h3>What's on Your Mind ?</h3>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control onChange={(e) => { this.setState({ title: e.target.value }) }} placeholder="Share your thoughts" as="textarea" rows="3" />
                <Button onClick={() => this.handleClick()} className="mt-3" variant="primary" size="lg" block>
                  Add Post
                </Button>
              </Form.Group>
              <div className="content mt-5">
                {this.props.posts && this.props.posts.map((post, i) => {
                  return (
                    <div key={post._id} className="postContent border shadow p-3 mb-4 bg-white rounded">
                      <h2>{post.title}</h2>
                      <button onClick={() => this.handleRating("like", post._id)} >like <span className='badge badge-light ml-2'>
                        {post.likes > 0 && Number(post.likes)}
                      </span> </button>
                      <button onClick={() => this.handleRating("dislike", post._id)} >dislike <span className='badge badge-light ml-2'>
                        {post.dislikes > 0 && Number(post.dislikes)}
                      </span></button>
                      <button style={post.heart ? { "backgroundColor": "red" } : { "backgroundColor": "" }} onClick={() => this.handleRating("heart", post._id)} >heart</button>
                      <FormControl
                        className="mt-2"
                        onChange={(e) => { this.setState({ comment: e.target.value }) }}
                        placeholder="Comment"
                        aria-label="Comment"
                        aria-describedby="basic-addon2"
                      />
                      <Button onClick={() => this.handleComment(post._id)} className="mt-3 mb-2" variant="primary" size="sm" block>
                        Add Comment
                      </Button>
                      <div className="comments">
                        {post.comments.length > 0 && post.comments.map((com, ci) => {
                          return (
                            <div key={ci} class="comment p-3 mb-2 bg-secondary text-white h-75">{com}</div>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
            </Col>
            <Col className="ads" ><h2>Ads</h2></Col>
          </Row>
        </div>
      </div>
    )
  }
}
const mapStatetoProps = (state) => {
  return {
    posts: state.posts.posts
  }
}
const mapDispatchtoProps = (dispatch) => {
  return bindActionCreators({ getAll, postData, ratingPost, postComment }, dispatch)
}

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
