import React, { Component } from 'react';

class Testimonials extends Component {

   constructor(props){
      super(props)
   }

   yearsOfExp = () => {
      var joiningDate = new Date("2018 7 7")
      var todayDate = new Date();
      var years = Math.floor((todayDate.getTime() - joiningDate.getTime()) / (24 * 60 * 60 * 1000))
      return Math.floor(years/365) + "+ years"
   }

  render() {
     var that=this;

    if(this.props.data){
      var testimonials = this.props.data.testimonials.map(function(testimonials){
        return  <li key={testimonials.user}>
            <blockquote>
               <p>{testimonials.text.replace("#yearOfExp#",that.yearsOfExp)}</p>
               <cite>{testimonials.user}</cite>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="testimonials">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>Client Testimonials</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {testimonials}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Testimonials;
