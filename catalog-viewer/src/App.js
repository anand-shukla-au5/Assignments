import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [image, setImage] = useState(['https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfL_GIirxHeMT3zCfh25wo6okKns8cl4_veg&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHJ4BXlRqHMOUBQWyOnOxHcSyXh5YOKzSjEw&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcRBGmQtVJhuQLZQzG18MGZQSKWHZuBMfuow&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5ROGbYpJw0h7EYIEMCoHcJ7ZmkHaQYaJCBw&usqp=CAU'])
  const [index, setIndex] = useState(0)
  const [auto, setAuto] = useState(false)
  console.log(index)
  useEffect(() => {
    let tag = document.getElementsByTagName("li")
    if (index >= 0 && index <= 2) {
      tag[index].setAttribute("class", "active")
      for (var i = 0; i < tag.length; ++i) {
        if (i !== index) {
          tag[i].removeAttribute("class");
        }
      }
    }
    console.log("tas", tag)
    if (index === -1) {
      console.log("set")
      setIndex(2)
    }
    else if (index === 3) {
      console.log("set")
      setIndex(0)
    }
    if (auto) {
      setTimeout(function () {
        setIndex(index + 1)
      }, 3000)
    }
  }, [index, auto])
  return (
    <div className="App">
      <div className="functions">
        <div className="row arrow m-0 p-0">
          <button className="btn btn-info mr-3" onClick={() => setIndex(index - 1)} >Arrow Left</button>
          <button className="btn btn-info ml-3" onClick={() => setIndex(index + 1)} >Arrow Right</button>
        </div>
        <div className="row form-check mt-2 p-0">
          <input className="form-check-input" type="checkbox" onChange={() => { setAuto(!auto) }} checked={auto} value='' id="defaultCheck1" />
          <label className="form-check-label" htmlfor="defaultCheck1"><strong>Auto Play</strong></label>
        </div>
      </div>
      <div className="img-wrapper">
        {image.map((e, i) => {
          return (
            <div key={i} className="carousel m-4" style={{ transform: `translateX(${-index * 620}px)` }} >
              <img src={e} alt="images" style={{ width: '600px', height: '350px' }} />
            </div>
          )
        })}
      </div>
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" onClick={() => setIndex(0)} data-slide-to="0"></li>
          <li data-target="#myCarousel" onClick={() => setIndex(1)} data-slide-to="1"></li>
          <li data-target="#myCarousel" onClick={() => setIndex(2)} data-slide-to="2"></li>
        </ol>
      </div>
    </div>
  );
}

export default App;