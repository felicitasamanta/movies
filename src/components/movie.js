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
    <div class=" col-lg-6 col-sm-10 mb-5 background card card_  bg-body rounded">
      <div class="front">
        <div class="card-body card_body background">
          <h5 class="card-title text-center ">
            {fid}. {title}
          </h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <ul class="list d-flex justify-content-around ">
              <h3>{category}</h3>
              <h3>{length} min</h3>
              <h3> rating: {rating}</h3>
            </ul>
          </li>
          <li class="list-group-item price">
            <span>Price:</span> {price} EUR
          </li>
          <li class="list-group-item">
            <span>Actors:</span> {actors}
          </li>
        </ul>
        <div class="card-body d-flex justify-content-center align-items-end">
          <a href="#" class="card-link btn button btn-primary ">
            WATCH TRAILER
          </a>
        </div>
      </div>
      <div class="back d-flex-column p-3 text-left justify-content-center">
        <span>Description:</span> {description}
      </div>
    </div>
  );
}

export default Movie;
