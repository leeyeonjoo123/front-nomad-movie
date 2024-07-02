import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../modules/Button.module.css";

export default function Detail() {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    //json에서 data에서 movie를 콘솔에 출력하니 정보들이 뜬다.. 이걸 이용해야되는데..
    //useState를 이용해서 detail값을 setDetails로 값을 변경해준다
    console.log(json.data.movie);
    setDetails(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(id);
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <h1>{details.title}</h1>
          <h3>{details.title_long}</h3>
          <p>
            {details.rating}
            <button>go to Netflix</button>
          </p>
          <img src={details.large_cover_image} alt={details.title} />
        </div>
      )}
    </div>
  );
}
