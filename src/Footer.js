import github from './imgs/github.png';
import twitter from './imgs/twitter.png';
import linkedin from './imgs/linkedin.png';
import instagram from './imgs/instagram.png';

const socialIcons = [
  {
    img: github,
    href: 'https://github.com/thepulsar000',
    id: 1
  },
  {
    img: twitter,
    href:'https://twitter.com/Vikkythoria?t=FklQpRulrsq-0cidZb8wfQ&s=09',
    id: 2
  },
  {
    img: linkedin,
    href: 'https://www.linkedin.com/in/victoria-ojo-7a77b9217',
    id: 3
  },
  {
    img: instagram,
    href: 'https://instagram.com/thepulsar?igshid=ZDc4ODBmNjlmNQ==',
    id: 4
  }
]

export function Icons(){
  return (
    <div className="icon">
      {socialIcons.map((icon) => {
        return (
          <div className="imgcont" key={icon.id}>
            <a href={icon.href} target="_blank" rel="noreferrer">
              <img src={icon.img} alt="Icon link" />
            </a>
          </div>
        );
      })}
    </div>
  );
}



function Footer() {
  return (
    <section>
      <div className="footer">
        <p className="footer-text">
          Project inspired by <span>Spotify.</span>
        </p>

        <div className="foot-icon">
          <Icons />
        </div>

      </div>
    </section>
  );
}
export default Footer;