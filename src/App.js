import React, { Component } from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Button,
  ListGroup, 
  ListGroupItem, 
  ListGroupItemHeading, 
  Card, 
  CardBody
} from 'reactstrap';
import StackSlider from './StackSlider';
import TodoList from './ToDoList';
import TicTacToe from './TicTacToe';
import Michael from './Michael_5_23_2018.jpg';
import Content01 from './content01.jpg';
import Content02 from './content02.jpg';
import Content03 from './content03.jpg';
import Content04 from './content04.jpg';
import Content05 from './content05.jpg';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      email : "user@domain.tld",
      contacted : false,
      slides : {
        main : [],
        stack : []
      },
      slideIndex : {
        main : 0,
        stack : 0
      },
    };
  }
  
  componentWillMount () {
    document.body.style.backgroundSize = 'cover';
    document.body.style.webkitBackgroundSize = 'cover';
    const changeBackground = () => {
        const content = [Content01,Content02,Content03,Content04,Content05];
        document.body.style.background = `url(${content[Math.floor(Math.random() * content.length)]}) no-repeat center center fixed`;
    }

    setInterval(changeBackground, 15000);
    changeBackground();
    document.title = 'Welcome to dreamingrainbow.com';
    const Slides = [
      {
          body : 
          <Card className="my-auto">
            <Row className="justify-content-center mt-3 no-gutters">
                <Col size={2} md={2} className="align-self-center px-3">
                    <img className="img-thumbnail mb-3" src={Michael} alt="Michael Dennis AKA dreamingrainbow"/> 
                    Michael A. Dennis <br/> Software Engineer             
                </Col>
                <Col size={10} md={10} className="align-self-center px-3" >

                    <h3 className="text-primary mb-0">Welcome to DreamingRainbow.com</h3>
                    <h4 className="text-info mb-0">Hello, I'm Michael Dennis, aka dreamingrainbow</h4>
                    <h5 className="text-danger mt-1 text-left">Let us start with a conversation about your dream, plan or idea today!</h5>
                    <p className="text-justify text-primary">With in a few moments we can start constructing your dream into reality.
                    We take the time to listen and really get the feel for what you want to achieve. We understand sometimes what we want to achieve and how we get there
                    are all about what we know and learn along the way. Click Next to see more or email me now. </p>
                    <a href="tel:14804338495"><i className="fa fa-phone"></i> 1 (480) 433 - 8495</a>  
                    &nbsp;&nbsp;<small> <i className="fa fa-star"></i> </small>&nbsp;&nbsp;<a href="https://www.linkedin.com/in/michael-dennis-89b80752" alt="Linked In Profile"><i className="fa fa-linkedin"></i> michael-dennis-89b80752</a>  
                    &nbsp;&nbsp;<small> <i className="fa fa-star"></i> </small>&nbsp;&nbsp;<a href="mailto:michaeladennis@yahoo.com"><i className="fa fa-envelope-o"></i> Michael A Dennis</a>

                </Col>
            </Row>
        </Card>,
      },
      {
          title : <h3 className="text-primary">Turning Dreams to Applications</h3>,
          subtitle : <h4 className="text-info">Bring your idea to life with custimized solutions.</h4>,
          body : 
          [<Row className="justify-content-center" key={0}>
              <Col size={4} md={4} className="align-self-center">
                  <ListGroup>
                      <ListGroupItem color="primary">
                          <ListGroupItemHeading>
                              Stacks
                          </ListGroupItemHeading>
                          <ul className="list-unstyled">
                              <li>
                                  MERN / AMERN 
                              </li>                                    
                              <li>
                                  LAMP / WAMP / XAMP 
                              </li>                                                                        
                          </ul>
                      </ListGroupItem>
                  </ListGroup>
              </Col>    
              <Col size={8} md={8}>
                  <Card color="white" inverse>
                      <CardBody className="text-justify text-primary">
                          From my more recent experences in the MERN and AMERN stacks, I can provide excellent applications designed around your needs.
                          When data is a concern, and the interactions between the front end and the back end matter, let me help. When user interaction, and design matters,
                          I can step in and take any wireframe theme and turn it to a react application using the many tools in my toolbelt.
                      </CardBody>
                  </Card>
              </Col>    
          </Row>,
          <Row className="justify-content-center" key={1}>
              <Col size={4} md={4} className="align-self-center">
                  <ListGroup>
                      <ListGroupItem color="info">
                          <ListGroupItemHeading>
                              Languages
                          </ListGroupItemHeading>
                          <ul className="list-unstyled">
                              <li>
                                  HTML(5) / (S)CSS
                              </li>
                              <li>
                                  JavaScript
                              </li>                                    
                              <li>
                                  PHP
                              </li>                                                                        
                          </ul>
                      </ListGroupItem>
                  </ListGroup>
              </Col>
              <Col size={8} md={8}>
                  <Card className="my-3">
                      <CardBody className="text-justify text-info">                    
                          From a young age I have been snooping around in different programming languages. My experience is mostly in PHP/JavaScript and the backend of web application development.
                          However, I have spent a lot of time utilizing tools like bootstrap and react to step up my game. Around `97 I started working with HTML and CSS and have been writing some sort of code since 8.
                          I now enjoy writing web based applications.
                      </CardBody>                    
                  </Card>
              </Col>    
          </Row>,
          <Row className="justify-content-center" key={2}>
              <Col size={4} md={4} className="align-self-center">
                  <ListGroup>
                      <ListGroupItem color="success">
                          <ListGroupItemHeading>
                              Data Management
                          </ListGroupItemHeading>
                          <ul className="list-unstyled">
                              <li>
                                  MongoDb 
                              </li>                                    
                              <li>
                                  MySql/Sqlite/MariaDb 
                              </li>
                              <li>
                                  PostgreSQL
                              </li>
                              <li>
                                  MS Access
                              </li>
                          </ul>
                      </ListGroupItem>
                  </ListGroup>
              </Col>
              <Col size={8} md={8}>
                  <Card className="my-4">
                      <CardBody className="text-justify text-success">
                          As the amount of data we have to handle grows its important to utilize the proper tools, for managing data. No one option is best for all solutions.
                          Having the ability to move around in the data world through out many types of data structures allows me to build better applications. Utilizing the right tools
                          allows me to build better applications that can handle your data needs. <a href="mailto:michaeladennis@yahoo.com?subject:web-contract-id=577512227">Click Here</a> to reach out and see what dreamingrainbow can bring to your table.
                      </CardBody>
                  </Card>
              </Col>
          </Row>]
      },
      {
          title : <h3 className="text-primary">Dynamic Driven Content.</h3>,
          subtitle : <h4 className="text-info">Where tv was dominate in the entertainment field, the Internet has taken over!</h4>,
          body : 
          <Row >
              <Col >
                  <h5 className="text-danger">So utilizing a website to its fullest potential can be highly demanding!</h5>
                  <p className="text-justify text-primary">Web-sites today can be created as an interactive enviroment, however, this can be time consuming to get right with out the proper toolset.</p>
                  <p className="text-justify text-primary">Utilizing todays tools, like React, Redux, and other frameworks like Bootstrap, and common languages like JavaScript we can create dynamically driven 
                  interactive sites faster, easier, and more secure than ever before. It's all about the tools in your toolbox!</p>
                  <StackSlider />                
              </Col>
          </Row>,        
      },
      {
        title : <h3 className="text-primary">Explore. Learn. Create!</h3>,
        subtitle : <h4 className="text-info">Here are a few of my favorite little projects.</h4>,          
        body: <Row >
                <Col >
                    <h5 className="text-danger">Each of these are public repositories your welcome to check out.</h5>
                    <ListGroup>
                        <ListGroupItem>
                            <a href="https://github.com/dreamingrainbow/Node-Express-Lessons">https://github.com/dreamingrainbow/Node-Express-Lessons</a>
                        </ListGroupItem>
                        <ListGroupItem>
                            <a href="https://github.com/dreamingrainbow/todo-list-lessons">https://github.com/dreamingrainbow/todo-list-lessons</a>
                        </ListGroupItem>
                        <ListGroupItem>
                            <a href="https://github.com/dreamingrainbow/blockchain-lessons">https://github.com/dreamingrainbow/blockchain-lessons</a>
                        </ListGroupItem>
                        <ListGroupItem>
                            <a href="https://github.com/dreamingrainbow/WhatIsGit">https://github.com/dreamingrainbow/WhatIsGit</a>
                        </ListGroupItem>
                        <ListGroupItem>
                            <a href="https://github.com/dreamingrainbow/Delta5">https://github.com/dreamingrainbow/Delta5</a>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
      },
      {
          title : <h3 className="text-primary">State driven design.</h3>,
          subtitle : <h4 className="text-info">Using tools like React, create feature rich, state driven web applications.</h4>,          
          body: <TodoList />
      },
      {
          title : <h3 className="text-primary">Thanks for taking a look at my online portfolio.</h3>,
          subtitle : <h4 className="text-info">michaeladennis@yahoo.com | (480) 433 - 8495 | <a href="https://discord.gg/vFeZuYj">BlockChange</a></h4>,
          body : <div>
            <a href="http://dreamingrainbow.com" >dreamingrainbow.com</a> | 
            &nbsp;<a href="https://github.com/dreamingrainbow">github.com/dreamingrainbow</a> |
            &nbsp;<a href="https://bitbucket.org/dre_mingrainbow">bitbucket.org/dre_mingrainbow</a>            
            <h4>I look forward to hearing from you soon!</h4>
            <TicTacToe />
          </div>          
      }
    ];  
    let slides = {main: Slides}
    this.setState({
      slides
    });
  }


  flipSlide (index) {
    const slideIndex = this.state.slideIndex;
    slideIndex[index] = slideIndex[index] + 1 ;
    if(slideIndex[index] >= this.state.slides[index].length) {
      slideIndex[index] = 0;
    }
    this.setState({
      slideIndex
    });
  }

  flipSlideBack (index) {
    const slideIndex = this.state.slideIndex;
    slideIndex[index] = slideIndex[index] - 1 ;
    if(slideIndex[index] <= 0) {
      slideIndex[index] = 0;
    }
    this.setState({
      slideIndex
    });
  }

  render() {
    if(this.state.slides) {
      return (
        <div className={`App  ${this.state.slideIndex.main === 1 ? 'my-1 pt-1' : 'my-5 pt-3'}`} >
          <Container fluid className="slide">
            <Container className={`slide-container justify-content-center align-self-center rounded ${this.state.slideIndex.main === 0 ? 'my-5 py-5' : ''}`} style={{backgroundColor:'#efefefef'}}>
              <Row className={`${this.state.slideIndex.main === 0 ? '' : 'mt-5 pt-3'}`}>
                <Col >
                  {this.state.slides.main[this.state.slideIndex.main].title}
                  {this.state.slides.main[this.state.slideIndex.main].subtitle}
                </Col>
              </Row>
              {this.state.slides.main[this.state.slideIndex.main].body}
              <Row>
                <Col className="my-3">
                  <span className="float-left">{this.state.slideIndex.main >= 1 ? <Button onClick={this.flipSlideBack.bind(this, 'main')}>Prev</Button> : null}</span>
                  <span className="float-right">{this.state.slideIndex.main < this.state.slides.main.length - 1 ? <Button onClick={this.flipSlide.bind(this, 'main')}>Next</Button> : null}</span>
                </Col>
              </Row>
            </Container>
          </Container>  
        </div>
      );
    } else {
      return (<i className="fa fa-spinner fa-spin></i>"></i>);
    }
  }
}

export default App;
