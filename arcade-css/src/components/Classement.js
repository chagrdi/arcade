import React from "react";

class Classement extends React.Component{
    render(){
        return(
            <div class="container">
            <div class="arcade-machine">
              <div class="shadow"></div>
              <div class="top">
                <div class="stripes"></div>
              </div>
              <div class="screen-container">
                <div class="shadow"></div>
                <div class="screen">
                  <div class="screen-display"></div>
                  <h2>C'EST PARTI THOMAS !!</h2>
                  <div class="alien-container">
                    <div class="alien">
                      <div class="ear ear-left"></div>
                      <div class="ear ear-right"></div>
                      <div class="head-top"></div>
                      <div class="head">
                        <div class="eye eye-left"></div>
                        <div class="eye eye-right"></div>
                      </div>
                      <div class="body"></div>
                      <div class="arm arm-left"></div>
                      <div class="arm arm-right"></div>
                    </div>
                  </div>
                </div>
                <div class="joystick">
                  <div class="stick"></div>
                </div>
              </div>
              <div class="board">
                <div class="button button-a"></div>
                <div class="button button-b"></div>
                <div class="button button-c"></div>
              </div>
              <div class="bottom">
                <div class="stripes"></div>
              </div>
            </div>
          
          </div>
                  
        );

        
    }

    
}

export default Classement;