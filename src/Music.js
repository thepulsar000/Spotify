import {Title} from './Title.js';
import king from './imgs/k&c.png';
import Cece from './imgs/Cece Winans.jfif';
import Moriah from './imgs/Moriah peters.jfif';
import Tauren from './imgs/Tauren.jfif';
import Mcreynolds from './imgs/Mcreynolds.jfif';


const artists = [
  {
    img: king,
    names: "for KING & COUNTRY",
    age: "2007 - present",
    genre: "Pop, Alt rock, Soft rock",
    nationality: "Nashville, US",
    ft: "Dolly Parton, Lecrae, Jordin Sparks, Tori Kelly... ",
    id: 1,
  },
  {
    img: Cece,
    names: "Cece Winans",
    age: "1981 - present",
    genre: "Gospel, R&B, Worship",
    nationality: "Michigan, U.S",
    ft: "Lauren Diagle, Carrie Underwood, Tauren Wells... ",
    id: 2,
  },
  {
    img: Moriah,
    names: "Moriah Peters",
    age: "2008 - present",
    genre: "Christian, Pop rock",
    nationality: "California, United States",
    ft: "Joel Smallbone (for KING & COUNTRY)...",
    id: 3,
  },
  {
    img: Tauren,
    names: "Tauren Wells",
    age: "2004 - present",
    genre: "Contemporary Christian music",
    nationality: "Michigan, United States",
    ft: "H.E.R, Lecrae, TobyMac, Blanca...",
    id: 4,
  },
  {
    img: Mcreynolds,
    names: "Jonathan Mcreynolds",
    age: "2012 - present",
    genre: "Gospel, Urban Contemporary gospel",
    nationality: "Chicago, Illinois",
    ft: "DOE, Tori Kelly, Aaron Cole... ",
    id: 5,
  },
  {
    img: king,
    names: "for KING & COUNTRY",
    age: "2007 - present",
    genre: "Pop, Alt rock, Soft rock",
    nationality: "Nashville, US",
    ft: "Dolly Parton, Lecrae, Jordin Sparks, Tori Kelly...",
    id: 6,
  },
  {
    img: Cece,
    names: "Cece Winans",
    age: "1981 - present",
    genre: "Gospel, R&B, Worship",
    nationality: "Nashville, US",
    ft: "Lauren Diagle, Carrie Underwood, Tauren Wells...",
    id: 7,
  },
  {
    img: Moriah,
    names: "Moriah Peters",
    age: "2008 - present",
    genre: "Christian, Pop rock",
    nationality: "California, United States",
    ft: "Joel Smallbone (for KING & COUNTRY)...",
    id: 8,
  },
  {
    img: Tauren,
    names: "Tauren Wells",
    age: "2004 - present",
    genre: "Contemporary Christian music",
    nationality: "Michigan, United States",
    ft: "H.E.R, Lecrae, TobyMac, Blanca...",
    id: 9,
  },
  {
    img: Mcreynolds,
    names: "Jonathan Mcreynolds",
    age: "2012 - present",
    genre: "Gospel, Urban Contemporary gospel",
    nationality: "Chicago, Illinois",
    ft: "DOE, Tori Kelly, Aaron Cole... ",
    id: 10,
  },
];


function Jump() {
  return (
    <section>
      <div className="scroll-margin" id="music">
        <Title title="Jump back in" />
      </div>

      <div
        className="artists">
        {artists.map((items) => {
          return (
            <div
              className="jump"
              key={items.id}
              onClick={(e) => {
                if (e.target.style.border === "") {
                  e.target.style.border = "3px dotted var(--green)";
                  // console.log('hi');
                } else if (e.target.style.border !== "") {
                  e.target.style.border = "";
                  // console.log("there");
                }
              }}
            >
              <img src={items.img} alt="songs" />
            </div>
          );
        })}
      </div>
    </section>
  );
}


function Artist() {
  return (
    <section>
      <div>
        <Title title="Your favorite artists" />
      </div>

      <div className="artists">
        {artists.map((items)=>{
          return (
            <div className="artist-card" key={items.id}>
              <div className="artist-front">
                <img src={items.img} alt="" />
              </div>
              <div className="artist-back">
                <h4>{items.names}</h4>
                <p>{items.age}</p>
                <p>{items.nationality}</p>
                <p>{items.genre}</p>
                <p>Ft. {items.ft}</p>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}

function Along() {
  return (
    <section>
      <div>
        <Title title="Sing-along" />
      </div>

      <div className="artists">
        {artists.map((items) => {
          return (
            <div
              className="jump"
              key={items.id}
              onClick={(e) => {
                if (e.target.style.border === "") {
                  e.target.style.border = "3px dotted var(--green)";
                  // console.log('hi');
                } 
                else if (e.target.style.border !== "") {
                  e.target.style.border = "";
                  // console.log("there");
                }
              }}
            >
              <img src={items.img} alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Music(){
  return (
    <div>
      <Jump />
      <Artist />
      <Along />
    </div>
  );
}

export default Music;