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
    <div class="hover card col-4 p-3 mb-5 bg-body rounded">
      <div class="card-body card_body">
        <h5 class="card-title">
          {fid}. {title}
        </h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <span>Description :</span> {description}
        </li>
        <li class="list-group-item">
          <span>Category:</span> {category}
        </li>
        <li class="list-group-item">
          <span>Price:</span> {price}
        </li>
        <li class="list-group-item">
          <span>Length:</span> {length}
        </li>
        <li class="list-group-item">
          <span>Rating:</span> {rating}
        </li>
        <li class="list-group-item">
          <span>Actors:</span> {actors}
        </li>
      </ul>
      <div class="card-body d-flex justify-content-center align-items-end">
        <a href="#" class="card-link btn btn-primary ">
          READ MORE
        </a>
      </div>
    </div>
  );
}

export default Movie;
