import React from "react"
import './TitleAni.css';

function Title(){
    return(
        <>
        <div>
           <div className='title'> 
                <span>D</span>
                <span>E</span>
                <span>V</span>
                <span>E</span>
                <span>L</span>
                <span>O</span>
                <span>P</span>
                <span>E</span>
                <span>R</span>
           </div>
           <div className="intro" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <div className='introduce'>
                <div className='introduce1'>
                    안녕하세요! 주니어 개발자 전성환입니다!
                </div>
                <div className='introduce2'>
                    적재적소에 알맞은 기술을 적용할 수 있는 개발자가 되도록 노력하겠습니다!
                </div>
            </div>
            </div>
        </div>
        </>
    );
}

export default Title;