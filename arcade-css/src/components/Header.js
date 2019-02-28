import React from "react";

class Header extends React.Component{
    render(){
        return(
          
    
        <div className="stage">
            <div class="arcademachinewrap">
                <div class="arcademachine">
                    <div class="box">
                        <div class="box cap">
                            <div class="side capright"></div>
                            <div class="side capleft"></div>
                            <div class="side capfront">
                                <div class="invader1 small"></div>
                                <div class="logo">SPACE<br />INVADERS</div>
                                <div class="invader1 small"></div>
                            </div>
                            <div class="side capbottom"></div>
                            <div class="side captop"></div>
                        </div>
                    </div>
                    <div class="box">
                        <div class="box panel">
                            <div class="side panelright"></div>
                            <div class="side panelleft"></div>
                            <div class="side panelfront">
                                <div class="coinslot"></div>
                            </div>
                            <div class="side panelbottom"></div>
                            <div class="side panelback">
                                <div class="screen">
                                    <div class="space-invaders-move">
                                      <div class="space-invaders">
                                        <div class="row invader3"></div>
                                        <div class="row double invader2"></div>
                                        <div class="row double invader1"></div>
                                      </div>
                                    </div>
                                    <div className="gameover">GAME OVER</div>
                                    <div className="insertcoin">INSERT COIN</div>
                                </div>
                            </div>
                            <div className="side paneltop">
                                <div className="playerleft">
                                    <div className="button left"></div>
                                    <div className="button right"></div>
                                </div>
                                <div className="playercenter">
                                    <div className="button fire"></div>
                                </div>
                                <div className="playerright">
                                <div className="button players1"></div>
                                <div className="button players2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="box main">
                        <div class="side mainright">
                            <div className="logo">SPACE<br />INVADERS</div>
                            <div className="invader2 big"></div>
                        </div>
                        <div className="side mainright inner"></div>
                        <div className="side mainleft inner"></div>
                        <div className="side mainleft">
                            <div className="logo">SPACE<br />INVADERS</div>
                            <div className="invader2 big"></div>
                        </div>
                        <div className="side mainbottom"></div>
                        <div className="side mainback">
                            <div className="powersocket"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        );
    }
}

export default Header;