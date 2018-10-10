import './App.css';
import React, { Component } from 'react';
import { Router,  Route, Link, Switch } from 'react-router-dom';
import createHistory from "history/createBrowserHistory";
import links from './linkImg';
import photos from './SourcePic';
import About from './About.js';

var allSourse = []
for (var x in photos){
  photos[x].map( item =>  {
    allSourse.push(item)
  })
}

class LoadingMessage extends Component {
  render() {
    return ( 
      <div className="load"><i className="fa fa-cog fa-spin fa-3x fa-fw"></i></div>
    )
  }
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allImg: null,
      inpValue: null
    }
    this.imgSearch = this.imgSearch.bind(this);
  }
  imgSearch = (event) => {
    var searchQuery = event.target.value.toLowerCase();
    var DisplayedItems = allSourse.filter((item) => {
      var searchValue = item.name.toLowerCase();
      return searchValue.indexOf(searchQuery) !==-1;
    })
    this.setState({
      allImg: DisplayedItems,
      inpValue: searchQuery
    })
    if (searchQuery === '') {
      this.setState({
        allImg: null,
        inpValue: null
      })
    }
  }
  render(){
    return (
      <header >
        <div className="header wrapper">
          <div className="logo">
            <a href="/">Gallery</a>
          </div>
          <nav className="menu">
            <ul className="topmenu">
              <li><Link to='/'>Main</Link></li>
              <li><span>Sections</span>
                <ul className="submenu"> {
                  links.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link to={{ pathname: `/img/${item.name}` }} >{item.name}</Link>
                      </li> 
                    )
                  })
                } 
                </ul>
              </li>  
              <li><Link to="/about">About us</Link></li>
            </ul>
          </nav>
          <div className="search">
            <input type="text" onChange={this.imgSearch} placeholder="Search..." ref={ c => this.input = c} onKeyDown={this.handleKeySearch}/>
            <Link to={{ pathname: "/search", state: { allImg: this.state.allImg, inpValue: this.state.inpValue } }}  >
              <i className="fas fa-search"></i>
            </Link>
          </div>
        </div>
      </header>
    )
  }
}

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: null };
    this.closeModal = this.closeModal.bind(this);
    this.findNext = this.findNext.bind(this);
    this.findPrev = this.findPrev.bind(this);
    this.renderImageContent = this.renderImageContent.bind(this);
  }
  renderImageContent(src, index) {
    return (
      <li className="item-cart" key={index} onClick={(e) => this.openModal(e, index)} >
        <img src={src.img} />
        <div className="item-name">{src.name}</div>
      </li>
    ) 
  }
  openModal(e, index) {
    this.setState ({ currentIndex: index });
    document.body.classList.add('noscroll') 
  }
  closeModal(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState ({ currentIndex: null });
    document.body.classList.remove('noscroll')
  }
  findPrev(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex -1
    }));
  }
  findNext(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }));
  }
  render(){
    if (this.props.location.state.allImg === null) 
     return <div className="results">Please, enter search</div>
    if  (this.props.location.state.allImg.length === 0) 
     return <div className="results">Sorry, your search '{this.props.location.state.inpValue}' did not match any results. Please try again.</div>
    return (
      <div className="items">
        <h1> Search </h1>
        <div className="results">{this.props.location.state.allImg.length} results for '{this.props.location.state.inpValue}':</div>
        <ul className="gallery-list"> 
            { this.props.location.state.allImg.map(this.renderImageContent)}
        </ul>
        <GalleryModal 
            closeModal={this.closeModal} 
            findPrev={this.findPrev} 
            findNext={this.findNext} 
            hasPrev={this.state.currentIndex > 0} 
            hasNext={this.state.currentIndex + 1 < this.props.location.state.allImg.length} 
            src={this.props.location.state.allImg[this.state.currentIndex]} 
        />
      </div>
    )
  }
}

class Main extends Component {
  render() {
    return (
      <section className="main">
        <div className="galleries"> {
          links.map((item, index) => {
            return (
              <div className="link" key={index}>
                <Link to={{ pathname: `/img/${item.name}`}} ><img src={item.img} alt={item.img}/></Link> 
                <h2>{item.name}</h2>       
              </div>  
            )
          })
        }
        </div>
      </section>  
    )
  }
}

class Gallery extends Component{
  constructor(props) {
    super(props);
    this.state = { currentIndex: null, loading: true };
    this.closeModal = this.closeModal.bind(this);
    this.findNext = this.findNext.bind(this);
    this.findPrev = this.findPrev.bind(this);
    this.renderImageContent = this.renderImageContent.bind(this);
  }
  renderImageContent(src, index) {
    return (
      <li className="item-cart" key={index} onClick={(e) => this.openModal(e, index)}>
        <img src={src.img} />
        <div className="item-name">{src.name}</div>
      </li>
    ) 
  }
  openModal(e, index) {
    this.setState ({ currentIndex: index });
    document.body.classList.add('noscroll') 
  }
  closeModal(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState ({ currentIndex: null });
    document.body.classList.remove('noscroll')
  }
  findPrev(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex -1
    }));
  }
  findNext(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }));
  }
  openModal(e, index) {
    this.setState ({ currentIndex: index });
    document.body.classList.add('noscroll') 
  }
  componentDidMount() {
    let that = this
    setTimeout(function(){that.setState({loading: false})}, 2000);
  }
  render(){
    console.log (this.state.loading)
    if (photos[this.props.match.params.gallery] === undefined)
      return <NotFound/>
    return(
      <div className="items">
        <h1> {this.props.match.params.gallery} </h1>
        <ul className="gallery-list" > 
          { photos[this.props.match.params.gallery].map(this.renderImageContent)}
        </ul>
        <GalleryModal 
          closeModal={this.closeModal} 
          findPrev={this.findPrev} 
          findNext={this.findNext} 
          hasPrev={this.state.currentIndex > 0} 
          hasNext={this.state.currentIndex + 1 < photos[this.props.match.params.gallery].length} 
          src={photos[this.props.match.params.gallery][this.state.currentIndex]} 
        />
      </div>
    )
  }
}

class GalleryModal extends Component {
  constructor() {
    super();
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  componentDidMount() {
    document.body.addEventListener('keydown', this.handleKeyDown);
  }  
  componentWillUnMount() {
    document.body.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown(e) {
    if (e.keyCode === 27)
      this.props.closeModal();
    if (e.keyCode === 37 && this.props.hasPrev)
      this.props.findPrev();
    if (e.keyCode === 39 && this.props.hasNext)
      this.props.findNext();
  }
  render () {
    const { closeModal, hasNext, hasPrev, findNext, findPrev, src } = this.props;
    if (!src) {
      return null;
    }
    return (
      <div>
        <div className="modal-overlay" onClick={closeModal}></div>
        <div className="modal">
          <button className='modal-close' onClick={closeModal} onKeyDown={this.handleKeyDown}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
          {hasPrev && <button className='modal-prev' onClick={findPrev} onKeyDown={this.handleKeyDown}>
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </button>}
          <img src={src.img} />
          {hasNext && <button className='modal-next' onClick={findNext} onKeyDown={this.handleKeyDown}>
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </button>}
          <div>{src.name}</div>
        </div>
      </div>
    )
  }
}

const NotFound = () =>
  <div className="results">
    <h2>404 page not found</h2>
    <p>We are sorry but the page you are looking for does not exist.</p>
  </div>

class App extends Component {
  render() {
    return (
      <Router history = {createHistory()}>
          <div>
            <Route  component = { Header } exact/>
            <Switch>
              <Route path="/" component = { Main } exact />
              <Route path="/search" component = {  Search } exact/>
              <Route path="/img/:gallery" component = { Gallery } exact/>
              <Route path="/about" component = {  About } />
              <Route path="*" component = { NotFound } exact/>
            </Switch>
          </div>
      </Router>
    )
  }
}

export default App;