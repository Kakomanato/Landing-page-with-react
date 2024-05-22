const Card = ({ description }) => {
  return (
    <div className="card">
      <img src="https://fakeimg.pl/500x325" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">Find out more!</a>
      </div>
    </div>
  );
}

export default Card;


