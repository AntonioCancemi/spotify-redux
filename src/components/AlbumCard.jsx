import { Col } from "react-bootstrap";

const AlbumCard = (props) => {
  console.log(props);

  return (
    <Col class=" text-center" id={props.songInfo.id}>
      <a href={"/album_page.html?id=" + props.songInfo.album.id}>
        <img
          class="img-fluid"
          src={props.songInfo.album.cover_medium}
          alt="1"
        />
      </a>
      <p>
        <a href={"/album_page.html?id=" + props.songInfo.album.id}>
          Album:{" "}
          {props.songInfo.album.title.length < 16
            ? props.songInfo.album.title
            : props.songInfo.album.title.substring(0, 16)}
        </a>
        <br />
        <a href={"/artist_page.html?id=" + props.songInfo.artist.id}>
          Artist: {props.songInfo.artist.name}
        </a>
      </p>
    </Col>
  );
};

export default AlbumCard;
