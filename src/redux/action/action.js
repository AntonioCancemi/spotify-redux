export const SET_LIKED = "SET_LIKED";
export const UNSET_LIKED = "UNSET_LIKED";
export const SET_HOME_CONTENT = "SET_HOME_CONTENT";
export const SET_RANDOM_QUERY = "SET_RANDOM_QUERY";

export const setLiked = (data) => {
  return {
    type: SET_LIKED,
    payload: data,
  };
};
export const unSetLiked = (id) => {
  return {
    type: UNSET_LIKED,
    payload: id,
  };
};
export const setHomeContent = (content) => {
  return {
    type: SET_HOME_CONTENT,
    payload: content,
  };
};
export const setRandomQuery = (content) => {
  return {
    type: SET_RANDOM_QUERY,
    payload: content,
  };
};
let headers = new Headers({
  // sets the headers
  "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
});
export const dispatchGetRandomArtists = (searchQuery) => {
  let url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

  return async (dispatch, getState) => {
    try {
      console.log("ciao");
      let response = await fetch(url + searchQuery, {
        method: "GET",
        headers,
      });
      if (response.ok) {
        let { data } = await response.json();
        let albumQuattro = data.slice(0, 1);
        console.log(albumQuattro);

        dispatch(setHomeContent(albumQuattro));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
