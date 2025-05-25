import { Form } from "react-router-dom";
import "./javascript.css";
import var1 from "./images/var.png"
import arrow from "./images/arrow.png"
import async1 from "./images/async.png"
import await1 from "./images/await.png"
import const1 from "./images/const.png"
import function1 from "./images/function.png"
import hoisting from "./images/hoisting.png"
import let1 from "./images/let.png"
import rest1 from "./images/rest1.png"
import rest2 from "./images/rest2.png"
import spread1 from "./images/spread1.png"
import spread2 from "./images/spread2.png"
import structure from "./images/structure.png"
import thank from "./images/thank.gif"

export default function Javascript() {
  return (
    <>
        
        <div className="j_title"> [JavaScript] 핵심 문법</div>
        
        <img className="hello" src="https://r1.community.samsung.com/t5/image/serverpage/image-id/7111571iA3328A1197EB101E/image-size/large?v=v2&px=999" alt="hello" />
    
        
        <div className="h">
            안녕하세요!!
        </div>

        <div className="h">
            오늘은 동아리 활동 중 배웠던 자바스크립트 문법을 복습하고 정리해보는 시간을 가지려고 합니다
            동아리를 하면서 자바스크립트를 처음 접했었는데 전에 배웠던 문법들과 달리 다채로운 매력을 가지고 있고, 무엇보다 확장 가능한 분야가 많다는 점이 가장 흥미로운 것 같습니다.
            이번 포스팅에서는 전에 공부했던 내용들과 추가적으로 공부했던 개념들을 다시 정리해보겠습니다!
        </div>
        
        <div className="h1">
            1. let과 const
        </div>

        <div className="h">
            자바스크립트에서 변수 선언할 때 가자 기본이되는 문법입니다.<br />
            대표적으로 var, let, const 3가지가 있습니다.
        </div>
        <div className="h2">
            var: 호이스팅 + 함수 스코프 + 중복, 초기화 없이 선언 가능
        </div>
        <img src={var1} alt="var" />
        <div className="h2">
            let: 재할당 가능 + 블록 스코프
        </div>
        <img src={let1} alt="let" />
        <div className="h2">
            const: 불변(immutable) 변수 선언 + 블록 스코프
        </div>
        <img src={const1} alt="const" />

        <div className="h2">
            호이스팅(Hoisting)이란?
        </div>
        <div className="h">
            자바스크립트에서 변수 선언이 코드의 맨 위로 끌어올려지는 
            동작 방식을 말하고 있습니다.
        </div>
        <img src={hoisting} alt="hoisting" />
        <div className="h2">
            var의 경우
        </div>
        <div className="h">
            var는 선언과 동시에 undefined로 초기화되기 때문에, 
            선언보다 앞에서 접근해도 에러없이 undefined가 출력될 수 있습니다.
        </div>
        <div className="h2">
            let과 const의 경우
        </div>
        <div className="h">
            let과 const도 호이스팅은 되지만, var와는 다르게 최기화가
            되지 않은 상태에 놓여 있습니다. 이 상태를 TDZ(Temporal Dead Zone)라고
            부르고 있습니다. 변수 선언 이전에 접근하면 ReferenceError가 발생합니다.
        </div>
        <div className="h2">
            정리하면...
        </div>
        <div className="h">
            var는 호이스팅과 함수 스코프 때문에 예측이 어렵고 위험하므로 
            거의 사용하지 않는 반면에 let과 const는 블록 스코프 + TDZ 보호로
            더 안전하게 사용할 수 있으므로 기본적으로는 const, 필요하면 let을 보편적으로
            사용하고 있습니다.
        </div>

        <div className="h1">
            2. 구조 분해 할당 & 전개 연산자
        </div>
        <div className="h">
            객체나 배열에서 필요한 값만 변수로 꺼내서 할당하는 문법입니다.
        </div>
        <img src={structure} alt="structure" />
        <div className="h">
            Key(속성 이름)을 기준으로 값을 불러 올수 있어서 코드를 깔끔하게 
            작성할 수 있습니다.
        </div>
        <div className="h2">
            전개 연산자(Spread / Rest)
        </div>
        <div className="h2">
            Spread: 펼치기
        </div>
        <div className="h">
            1. 배열에서 Spread
        </div>
        <img src={spread1} alt="spread1" />
        <div className="h">
            2. 객체에서 Spread
        </div>
        <img src={spread2} alt="spread2" />
        <div className="h2">
            Rest: 나머지를 묶기
        </div>
        <div className="h">
            1. 배열에서 Rest
        </div>
        <img src={rest1} alt="rest1" />
        <div className="h">
            2. 객체에서 Rest
        </div>
        <img src={rest2} alt="rest2" />
        <div className="h2">
            정리하면...
        </div>
        <div className="h">
            구조 분해는 데이터를 다룰 때 필요한 값만 꺼낼수 있어서 가독성을 
            높일 수 있고 전개 연산자는 배열/객체 복사, 병합, 나머지 파라미터 
            처리에 자주 사용되고 있습니다. 또한 API은답이나 props 다룰 때
            응용하여 많이 사용되고 있다는 것을 알 수 있습니다.
        </div>
        <div className="h1">
            3. 화살표 함수
        </div>
        <div className="h2">
            function함수 사용
        </div>
        <img src={function1} alt="function1" />
        <div className="h2">
            화살표 함수(=>) 사용
        </div>
        <img src={arrow} alt="arrow" />
        <div className="h">
            함수를 짧게 쓸 수 있다는 것도 장점이지만, this 바인딩에서 차이가
            있기 때문에 화살표 함수를 사용하고 있습니다.
        </div>
        <div className="h2">
            이유가 뭘까...?
        </div>
        <div className="h">
            가장 큰 이유는 function함수에는 this가 존재하고 화살표 함수에는 this가
            존재하지 않아서 그렇습니다. JavaScript에서는 식별자를 찾을 때 현재 환경에
            존재하지 않으면 상위 환경에서 찾게 되는데 화살표 함수는 this 식별자가 없기
            때문에 상위 환경에서의 식별자를 참조하게 됩니다. 이 때문에 우리가 화살표 함수를
            선언하게 되면 상위 스코프가 this로 바인딩 되기 때문에 우리가 의도한 this가 
            바인딩되고 있다는 것을 알 수 있습니다.
        </div>
        <div className="h1">
            4. async / await
        </div>
        <div className="h">
            async/await 문법을 살펴보기 전에 먼저 동기와 비동기에 대해서 알아볼 필요가 있습니다.
            '동기'란 순서를 지키면서 일을 처리하는 방식이고 '비동기'란 시작된 작업의 완료 여부와 
            상관없이 새로운 작업을 시작하는 방식입니다. 자바스크립트는 기본적으로 동기 방식으로 
            구동이 되는 언어이지만 비동기 방식으로 구동이 될수 도 있습니다 <br />
            async/await 문법은 자바스크립트에서 비동기 처리를 할 때 사용되는 문법입니다.
        </div>
        <div className="h2">
            async 함수
        </div>
        <img src={async1} alt="async1" />
        <div className="h">
            위에 있는 코드처럼 함수 앞에 async만 붙여주면 promise로 변환되어
            작동되는 것을 알 수 있습니다.
        </div>
        <div className="h2">
            await 함수
        </div>
        <img src={await1} alt="await1" />
        <div className="h">
            await 키워드는 async 함수 안에서만 사용되며 promise가 처리될 때까지
            기다려주는 역할을 맡고 있습니다. await가 있는 곳에서 프로그램의 흐름을 
            멈추고, 작업이 끝나기를 기다립니다. 그리고 작업이 끝나면 결과를 가져다주고
            함수가 다시 실행되는 것을 알 수 있습니다.
        </div>
        <div className="h2">
            정리하면...
        </div>
        <div className="h">
            async를 앞에 붙여 함수를 만들고 비동기 실행을 해야할 부분의 앞에 await을
            붙이는 방식으로 사용합니다. await이 붙은 코드를 실행하고 그것이 리턴하는 
            promise 객체가 fulfilled 상태가 될때까지 기다린 후에 작업 성공 결과를
            리턴하게 됩니다. 비동기 작업을 처리할 때 promise를 쓸 수 도 있지만, 
            async/await이 훨씬 읽기 편하고 깔끔한 것을 알 수 있습니다. 실제로 서버
            API를 호출하거나, 더이터를 로드할 때 기본적으로 이 문법을 많이 사용하고 있습니다.
        </div>

        <div className="l">
            --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </div>

        <div className="h">
            자바스크립트는 다른 언어들보다 기능도 많고 다채로운 언어인 것 같습니다.<br />
            그 만큼 알아야 할 것도 많고 공부해야 할 부분도 많지만, 볼때마다 재밌게 공부하고 있는 언어 중 하나 인 것 같습니다.<br />
            이번 기회를 통해 자바스크립트에 한 걸음 더 나아갈 수 있도록 노력하겠습니다!!<br />
            이상으로 자바스크립트 문법 포스팅을 마치겠습니다.<br />
            읽어주셔서 감사합니다!
        </div>

        <img className="thankl" src={thank} alt="thank" />
    </>
  );
}