import "./SkillsAni.css";

export default function Skills(){
    return(
        <div className = "skill">
        <div id="skills">
            <div className="flip" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
            <h1 className='skillstitle'> Skills </h1>
            <div className='front'>
                <div className='iconstyle'>
                    <img src="/images/html.png" width="200px" height="200px"/> 
                    <span class="text">tried</span>
                </div>
                <div className='iconstyle'>
                    <img src="/images/css.png" width="200px" height="200px"/> 
                    <span class="text">tried</span>
                </div>
                <div className='iconstyle'>
                    <img src="/images/js.png" width="200px" height="200px" /> 
                    <span class="text">tried</span>
                </div>
                <div className='iconstyle'>
                    <img src="/images/react.png" width="200px" height="200px"/> 
                    <div class="text">tried</div>
                </div>
            </div>
            <div className='back'>
                <div className='iconstyle'>
                    <img src="/images/python.png" width="200px" height="200px"/> 
                    <div class="text">familiar</div>
                </div>
                <div className='iconstyle'>
                    <img src="/images/c.png" width="200px" height="200px"/> 
                    <div class="text">familiar</div>
                </div>
            </div >
            <div claaName='data'>
                <div className='iconstyle'>
                    <img src="/images/mysql.png" width="190px" height="190px"/> 
                    <div class="text">tried</div>
                </div>
            </div>
            <div className='tool'>
                <div className='iconstyle'>
                    <img src="/images/notion.png" width="200px" height="200px"/> 
                    <div class="text">tried</div>
                </div>
                <div className='iconstyle'>
                    <img src="/images/git.png" width="200px" height="200px"/> 
                    <div class="text">tried</div>
                </div>
                <div className='iconstyle'>
                    <img src="/images/github.png" width="200px" height="200px"/> 
                    <div class="text">tried</div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}