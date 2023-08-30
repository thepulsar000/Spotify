
// import soul from './imgs/soul.jpg';
import group from './imgs/group.jpg';
import sondae from './imgs/sondae.jpg';
import oldschool from './imgs/oldschool.png';
// import liked from './imgs/liked.jpg';
// import guitar from './imgs/guitar.jpg';



const details = [
  // {
  //   img: soul,
  //   alt: 'soul music',
  //   title: "Soul",
  //   id: 1
  // },
  {
    img: group,
    alt: 'group music',
    title: "Group",
    id: 2
  },
  {
    img: sondae,
    alt: 'sondae music',
    title: "Sondae",
    id: 3
  },
  {
    img: oldschool,
    alt: 'old-school music',
    title: "Old School",
    id: 4
  },
  // {
  //   img: liked,
  //   alt: 'liked music',
  //   title: "Liked Songs",
  //   id: 5
  // },
  {
    img: group,
    alt: 'guitar music',
    title: "Tauren Wells",
    id: 6
  }
];

function Recent(props) {
  const { img, title, alt } = props;
  // console.log(index);
  return (
    <div className="back">
      <div className="recent">
        <div className="img-div">
          <img src={img} alt={alt} />
        </div>

        <div className="text-div">{title} </div>
      </div>
    </div>
  );
}




function Recents() {

    return (
      <>
        <section className="recents scroll-margin" id="recent">
          <div className="recent-box">
            {details.map((items, index) => {
              return <Recent {...items} key={items.id} index={index + 1} />;
            })}
          </div>
        </section>
      </>
    );
}

export default Recents;