import "./style.css";
import React,{Component} from "react";


class Container extends Component{
    constructor(props){
        super(props);
        this.state = {
            classSlide : {
                col1: window.screen.availWidth>800?"container__canvas":"container__canvas mobile",
                col2: window.screen.availWidth>800?"container__panel":"container__panel mobile"
            },
            touch : {
                touchStartX:0,
                touchMoveX:0,
                touchStartY:0,
                touchMoveY:0
            }
        }
    }


    funcTouchChange = (key1,x,key2,y) => {
        let obj = {...this.state.touch};
        obj[key1] = x;
        obj[key2] = y;
        this.setState(state => ({...state,touch:obj}));
    }

    handleTouchEnd = () => {
        let thresh;
        if(this.props.threshold){
            thresh = this.props.threshold;
        }else{
            thresh = 40;
        }
        if(Math.abs(this.state.touch.touchStartX - this.state.touch.touchMoveX) > Math.abs(this.state.touch.touchStartY - this.state.touch.touchMoveY) && 
            Math.abs(this.state.touch.touchStartX - this.state.touch.touchMoveX)> thresh && 
            Math.abs(this.state.touch.touchStartY - this.state.touch.touchMoveY)< thresh &&
            this.state.touch.touchStartX !== 0 && this.state.touch.touchStartY !== 0){
                if(this.state.touch.touchStartX - this.state.touch.touchMoveX < 0){
                    let obj = {...this.state.classSlide};
                    obj.col1 = "container__canvas mobile";
                    obj.col2 = "container__panel mobile";
                    this.setState(state => ({...state,classSlide:obj}));
                }else if(this.state.touch.touchStartX - this.state.touch.touchMoveX > 0){
                    let obj = {...this.state.classSlide};
                    obj.col1 = "container__canvas mobile slide";
                    obj.col2 = "container__panel mobile slide";
                    this.setState(state => ({...state,classSlide:obj}));
                }
        }
    }

    recursiveGetParents = (element, arr) => {
        if(element && !Array(...element.classList).includes("container")){
            arr.push(...element.classList);
            this.recursiveGetParents(element.parentNode, arr)
        }
    }

    render(){
        return (
            <div 
            className="container"
            onTouchStart={(e)=>{
                let classList =  [];
                this.recursiveGetParents(e.nativeEvent.targetTouches[0].target, classList);
                
                if(classList.includes("container__panel")){
                    this.funcTouchChange("touchStartX",e.nativeEvent.targetTouches[0].clientX,"touchStartY",e.nativeEvent.targetTouches[0].clientY);
                }else{
                    this.funcTouchChange("touchStartX",0,"touchStartY",0);
                }
            }} 

            onTouchMove={
                (e) => {
                    if(e.nativeEvent.targetTouches[0].target.classList.value){
                        this.funcTouchChange("touchMoveX",e.nativeEvent.targetTouches[0].clientX, "touchMoveY", e.nativeEvent.targetTouches[0].clientY);
                    }else{
                        this.funcTouchChange("touchMoveX",0, "touchMoveY", 0);
                    }
                }
            } 
            onTouchEnd= {this.handleTouchEnd}
            style={this.props.containerStyle}
            >

                <div 
                className={this.state.classSlide.col1}
                style={this.props.canvasStyle}
                >
                    {this.props.canvas}
                </div>

                <div 
                className={this.state.classSlide.col2}
                style={this.props.panelStyle}
                >
                    {this.props.panel}
                </div>

            </div>
        );
    }
};

export default Container;
