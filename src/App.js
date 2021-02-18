import './App.css';

import { TweenMax, Power3 } from 'gsap';
import { useRef, useEffect, useState } from 'react';

function App() {
  const [state, setState] = useState(false);
  const app = useRef(null);
  const circlePink = useRef(null);
  const circleOrange = useRef(null);
  const circleCoral = useRef(null);

  useEffect(() => {
    TweenMax.to(app.current, 0, { css: { visibility: 'visible'}})
    // TweenMax.from(circlePink.current, .8, { opacity: 0, x: 50, ease: Power3.easeOut})
    // TweenMax.from(circleOrange.current, .8, { opacity: 0, x: 50, ease: Power3.easeOut, delay: .2})
    // TweenMax.from(circleCoral.current, .8, { opacity: 0, x: 50, ease: Power3.easeOut, delay: .4})
    TweenMax.staggerFrom([circlePink.current, circleOrange.current, circleCoral.current], .8, { opacity: 0, x: 50, ease: Power3.easeOut}, .2)
  }, [])

  const handleExpand = (e) => {
    TweenMax.to(e.target, .8, { width: 200, height: 200, ease: Power3.easeOut});
    setState(true);
  }

  const handleShrink = (e) => {
    TweenMax.to(e.target, .8, { width: 100, height: 100, ease: Power3.easeOut});
    setState(false)
  }

  return (
    <div className="App" ref={app}>
      <header className="App-header">
        <div className="circle-container">
          <div className="circle pink" ref={circlePink} onClick={state ? handleShrink : handleExpand}></div>
          <div className="circle orange" ref={circleOrange} onClick={state ? handleShrink : handleExpand}></div>
          <div className="circle coral" ref={circleCoral} onClick={state ? handleShrink : handleExpand}></div>
        </div>
      </header>
    </div>
  );
}

export default App;
