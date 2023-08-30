

const linkText = [
  {
    href: "#recent",
    text: "Recent",
    id: 1,
  },
  {
    href: "#music",
    text: "Music",
    id: 2,
  },
  {
    href: "#pod",
    text: "Podcasts & Shows",
    id: 3,
  },
  {
    href: "#record",
    text: "Recordings",
    id: 4,
  },
];

export function NavBar() {
  return (
    <div className="sticky">
      <div className="two">
        {linkText.map((link) =>{
            return (
              <li key={link.id}>
                <a href={link.href}> {link.text}</a>
              </li>
            );
        })}
        
      </div>
    </div>
  );
}




export function SideNav() {
  let wholeColor = document.querySelector(":root");
  let newColor = ["white", "teal", "orange", "#1db954"];
  let numb = 0;

  function changeColor(e) {

    e.target.style.backgroundColor = newColor[numb];
    wholeColor.style.setProperty("--green", newColor[numb]);
    console.log(numb);

    if (numb < newColor.length - 1) {
      numb++;
    } else if (numb >= newColor.length - 1) {
      numb = 0;
    }
  }
  
  return (
    <div>
      <div className="side-nav" onClick = {changeColor}>
        
      </div>
    </div>
  );
}
