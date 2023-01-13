import "./movie.css";
function Movie(props) {
  const fid = props.movie.FID;
  const title = props.movie.title;
  const description = props.movie.description;
  const category = props.movie.category;
  const price = props.movie.price;
  const length = props.movie.length;
  const rating = props.movie.rating;
  const actors = props.movie.actors;

  return (
    <div className=" gap-3 col-sm-8 mb-5 background card card_  bg-body rounded">
      <div className="front">
        <div className="card-body card_body background">
          <h5 className="card-title text-center ">
            {fid}. {title}
          </h5>
        </div>
        <ul className="list-group list-group-flush ">
          <li className="list-group-item">
            <ul className="list d-flex justify-content-around ">
              <h3>{category}</h3>
              <h3>{length} min</h3>
              <h3> rating: {rating}</h3>
            </ul>
          </li>
          <li className="list-group-item price">
            <span>Price:</span> {price} EUR
          </li>
          <li className="list-group-item">
            <span>Actors:</span> {actors}
          </li>
        </ul>
      </div>
      <div className="back d-flex-column p-3 text-left justify-content-center">
        <span>Description:</span> {description}
        <div className="card-body d-flex justify-content-center align-items-end">
          <a href="#" className="card-link btn button btn-primary ">
            WATCH TRAILER
          </a>
        </div>
      </div>
    </div>
  );
}

export default Movie;
