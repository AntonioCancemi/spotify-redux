import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  dispatchGetRandomArtists,
  setRandomQuery,
} from "../redux/action/action";
import AlbumCard from "./AlbumCard";

const MyHome = () => {
  const dispatch = useDispatch();
  const homeContent = useSelector((state) => state.user.homeContent);
  const popArtists = useSelector(
    (state) => state.user.randomArtists.popArtists
  );
  const rockArtists = useSelector(
    (state) => state.user.randomArtists.rockArtists
  );
  const hipHopArtists = useSelector(
    (state) => state.user.randomArtists.hipHopArtists
  );
  const randomQuery = useSelector((state) => state.user.randomQuery);

  const getRandomArtists = async () => {
    let rockRandomArtists = [];
    let popRandomArtists = [];
    let hipHopRandomArtists = [];
    let randomQuery = [
      rockRandomArtists,
      popRandomArtists,
      hipHopRandomArtists,
    ];
    document.querySelector("#searchField").value = ""; // empties search field on page load

    while (rockRandomArtists.length < 4) {
      // pushes elements inside the array until it has 4 strings
      let artist = rockArtists[Math.floor(Math.random() * rockArtists.length)]; // select an element from the array with an index between 0 and 7
      if (!rockRandomArtists.includes(artist)) {
        // checks if the artist is not already present in the array
        rockRandomArtists.push(artist); // pushes the artist in the array
      }
    }

    while (popRandomArtists.length < 4) {
      let artist = popArtists[Math.floor(Math.random() * popArtists.length)];
      if (!popRandomArtists.includes(artist)) {
        popRandomArtists.push(artist);
      }
    }

    while (hipHopRandomArtists.length < 4) {
      let artist =
        hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)];
      if (!hipHopRandomArtists.includes(artist)) {
        hipHopRandomArtists.push(artist);
      }
    }
    dispatch(setRandomQuery(randomQuery));
    return randomQuery;
  };

  useEffect(() => {
    getRandomArtists();
    randomQuery.map((genreQuery) =>
      genreQuery.map((query) => {
        //console.log(query);
        dispatch(dispatchGetRandomArtists(query));
      })
    );
  }, []);
  return (
    <Col xs={12} md={9} class=" offset-md-3 mainPage">
      <Row>
        <Col xs={9} lg={11} class=" mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </Col>
      </Row>
      <Row>
        {randomQuery ? (
          homeContent.slice(0, 4).map((album, i) => (
            <Col xs={10}>
              <div id="rock">
                <h2>Rock</h2>
                <Row className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3 wrap">
                  <AlbumCard key={i} songInfo={album[0]}></AlbumCard>
                </Row>
              </div>
            </Col>
          ))
        ) : (
          <div id="searchResults">
            <h2>Search Results</h2>
            <Row xs={1} sm={2} lg={3} xl={4} class="imgLinks py-3"></Row>
          </div>
        )}
      </Row>
    </Col>
  );
};
export default MyHome;
