
export function Title(props) {
  const { title, time } = props;
  return (
    <>
      <h3>
        {time}
        {title}
      </h3>
    </>
  );
}


export function PodcastName(props) {

  return (
    <div className="podname">
      <h4 className="green" id="podname"> Hello, Goodbye</h4>
      <div>noone</div>
    </div>
  );
}