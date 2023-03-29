import { useEffect, useState } from 'react';
import axios from "axios";
import './Home.css';

// const baseURL = "https://api.unsplash.com/photos/random?count={count}&client_id=s98p3YQ128slH2jYEoKnPTf7v_wuDD-cMb2n4ES-_jU";

 
function Home() {
    const [images, setImages] = useState([]);
    const [count, setCount] = useState(0);
    useEffect(() => {
        axios.get(`https://api.unsplash.com/photos/random?count=${count}&client_id=Zc7gasXNTJGYqtjkLaRT_np6pIv4e3EhO7oIrvWOf-Q`
        ).then((response) => {
            setImages(response.data);
          });
    }, [count])

    const handelInput = (e) => {
        setCount(e.target.value)
    }

  return (
    <div className="App">
        <div className='search'>
            <input placeholder='search for photos' className='search_1' width="80%" type="search" id="sai" value={count} onChange={handelInput} defaultValue="1"/>
            
        </div>
        <div></div>
      {images.length>0 ? images.map((item) => (
        
    <div className='card'>
        <img  src={item.urls.full} height="150px" width="150px" alt="fw"/>
    </div>
    
      )) : <div><h1>please</h1></div> }

    </div>
  );
}

export default Home;
