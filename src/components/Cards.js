import React, { useContext, useEffect, useState } from "react";
import "../styles/cards.css";
import pic from "../pics/pic.jpg";
import pic2 from "../pics/pic2.jpg";
import pic3 from "../pics/pic3.jpg";
import pic4 from "../pics/pic4.jpg";
import pic5 from "../pics/pic5.jpg";
import pic6 from "../pics/pic6.jpg";
import pic7 from "../pics/pic7.jpg";
import pic8 from "../pics/pic8.jpg";
import pic9 from "../pics/pic9.jpg";
import pic10 from "../pics/pic10.jpg";
import { Prev } from "react-bootstrap/esm/PageItem";
import {cartContext} from '../pages/home/Home'
const Cards = () => {

  const [cards,setCards] = useState([
    { pic: pic, colors: [{color:'pink',check:false},{color:'blue',check:false}], title: "t-shirt", pric: 20,id:1 },
    
    { pic: pic, colors: [{color:'black',check:false},{color:'blue',check:false}], title: "t-shirt", pric: 23,id:2 },
    { pic: pic2, colors: [{color:'blue',check:false},{color:'pink',check:false}], title: "t-shirt", pric: 5,id:3 },
    { pic: pic3, colors: [{color:'pink',check:false},{color:'blue',check:false}], title: "t-shirt", pric: 10,id:4 },
    { pic: pic4, colors: [{color:'pink',check:false},{color:'black',check:false}], title: "t-shirt", pric: 12,id:5 },
    { pic: pic5, colors: [{color:'pink',check:false},{color:'black',check:false}], title: "t-shirt", pric: 12,id:5 },
    { pic: pic6, colors: [{color:'pink',check:false},{color:'black',check:false}], title: "t-shirt", pric: 12,id:5 },
  ])

  const [sabad, setSabad] = useContext(cartContext);
  const [color, setColor] = useState([]);
  
  const handleChange= (e,id) => {
    console.log(e.target.value)
    console.log(id)
   setCards(prevv=> {
    return prevv.map(item=>{
     if(item.id===id){
      return {...item,colors: [{color:e.target.value,check:true}]}
     }else{
      return {...item}
     }
    })
   })

     
  };
  useEffect(()=>{
    console.log('first')
  },[color])
  const handleClick = (id)=>{

    setSabad(prevv=> {
      return [...prevv,cards.filter(item=>item.id===id)]
    })
   
  }
 console.log(sabad,'sa')
 console.log(color,'co')
 console.log(cards,'card')
  return (
    <div className="card-continer row">
      <div className="outer-wrapper row">
        <div className="inner-wrapper row-cols-1">
          {cards.map((item, index) => {
            return (
              <div class="pseudo-item col-sm-6 col-lg-2 col-12 " key={item.id} >
                <div class="box_img">
                  <div className="box">
                    <img src={item.pic} />
                  </div>
                </div>
                <div class="body">
                  <div class="title">t-shirt</div>

                  <div class="color-box">
                    choose a color:

                    <div className="color black">
                      <input
                        type="radio"
                        className="cb"
                        name={`checkbox-${item.id}`}
                        value='black'
                        onChange={(e)=>handleChange(e,item.id)}
                      />
                      <span className="check"></span>
                    </div>

                    <div className="color pink">
                      <input
                        type="radio"
                        className="cb"
                        name={`checkbox-${item.id}`}
                        value='pink'
                        onChange={(e)=>handleChange(e,item.id)}
                         />
                      <span className="check"></span>
                    </div>

                    <div className="color blue">
                      <input
                        type="radio"
                        className="cb"
                        name={`checkbox-${item.id}`}
                        value='blue'
                        onChange={(e)=>handleChange(e,item.id)}
                      />
                      <span className="check"></span>
                    </div>

                  </div>
                  <div class="price">$ {item.pric}</div>
                  <div className="add" onClick={(e)=>handleClick(item.id)}><span>Add</span></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
