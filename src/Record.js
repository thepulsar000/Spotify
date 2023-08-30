import record from './imgs/record.jpg';
import { Title } from './Title.js';



function Record() {

  return (
    <section>
      <div className="scroll-margin" id="record">
        <Title title="Record & Mix" />
      </div>
      <div className="rec">
        <div className="tape">
          <img src={record} alt="" />
        </div>

        <div className="tape-text">
          <h3><span className="grey">... </span>whole new experience</h3>
          <button onClick = {(e)=>{
            let recEl = document.querySelector('.tape');
            if(recEl.style.opacity !== "1"){
              recEl.style.opacity = "1";
              e.target.innerText = "Revert";
            }
            else if(recEl.style.opacity === "1"){
              recEl.style.opacity = "0.1";
              e.target.innerText = "Explore";
            }
          }}>
            Explore
          </button>
        </div>
      </div>
    </section>
  );
}
export default Record;