import {Title} from './Title.js';
import { Icons } from './Footer.js';
import search from './imgs/search.svg';



function Greeting() {
    let greet_text;
    let artist;
    const date = new Date();
    let hour = String(date.getHours()).padStart(2, "0");

    if(hour >= 0 && hour < 12){
        hour = 'Morning, ';
        greet_text = " you'll be alright";
        artist = 'Mary Mary';
    }else if(hour >= 12 && hour < 18){
        hour = 'Afternoon, ';
        greet_text = "in the song of the afternoon";
        artist = 'Alice By Heart';
    }else if(hour >= 18 && hour < 24){
        hour = 'Evening, ';
        greet_text = "i still say goodnight";
        artist = "Tate McRae";
    }
  return (
    <section className="one">
      <div className="greet-text">
        <Title time={hour} title="Vee" />

        <p>
          {greet_text}
          <span className="green"> -{artist}</span>
        </p>
      </div>
      <div className="head-icon">
        <Icons />
      </div>
    </section>
  );
}

function Search(){
  return (
    <div className="form-field">
      <form action="">
        <input
          type="search"
          placeholder="Search..."
          aria-label="search for songs & artists"
        />
        <button>
          <img src={search} alt="" />
        </button>
      </form>
    </div>
  );
}



function Header(){
    return(
        <div>
            <Greeting />
            <Search />
        </div>
    )
}
export default Header;
