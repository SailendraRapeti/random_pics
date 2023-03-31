import React from 'react';
import axios from "axios";
import { useSelector } from "react-redux";
import { addProducts, deleteEntireCart } from "./redux/imagesRedux"
import { connect } from 'react-redux';


import './Home.css';
class Home extends React.Component{
  constructor(props){
    super(props);
    this.state={images:[],invalue:0}
    this.handelInput=this.handelInput.bind(this);
    this.deleteImage=this.deleteImage.bind(this);
    
  }
  
  deleteImage=(index)=>{
    const { dispatch } = this.props
    dispatch(deleteEntireCart(index))

  }
   handelInput = (e) => {
    const {invalue,images} = this.state
    this.invalue=e.target.value
    const { dispatch } = this.props
      axios({
        url: `https://api.unsplash.com/photos/random?count=${e.target.value}&client_id=UKZNmvbUV9QiCf5ZOb9Wfx6NtxFaGGzjaEulzzMVRBs`,
        method: 'GET',
        headers: { 'content-Type': "application/json" }
    }).then(res => {
      this.setState({ images: res.data });
      dispatch(addProducts(res.data))
      
      
    })
        .catch(err => console.log(err))
  
    
    
}

  render(){
    let { images,invalue} = this.state
    return(
      <div className="App">
        <div className='search'>
            <input placeholder='search for photos'  className='search_1' width="80%" type="search" id="sai"  onChange={this.handelInput} defaultValue="1"/>
            
        </div>
      {images.length>0 ? images.map((item,index) => (

      
      <div className='card'>
       <img  src={item.urls.full} height="150px" width="150px" alt="fw"/>
       <button type="button" onClick={this.deleteImage(index)}></button>
  </div>
        
    
      )) : <div><h1>please enter valid input</h1></div> }

    </div>
    )
  }
}

export default connect()(Home)