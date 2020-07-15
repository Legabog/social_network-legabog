import { userAPI } from "../api/api";

const ADD_TO_PLAYLIST = "ADD_TO_PLAYLIST";
const SWITCH_STATE_OF_PLAYLISTS = "SWITCH_STATE_OF_PLAYLISTS";
const ADD_TRACK_TO_PLAYLIST = "ADD_TRACK_TO_PLAYLIST";
const SET_MY_OWN_PLAYLISTS_DATA = "SET_MY_OWN_PLAYLISTS_DATA";
const TOGGLE_FETCH = "TOGGLE_FETCH";

let initialState = {
  ownPlayLists: [],
  playListSwitcher: false,
  tempTrack: null,
  fetch: false,
  tempTrackPayLoad: null
};

const musicPlayListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PLAYLIST:
      return {
        ...state,
        ownPlayLists: [...state.ownPlayLists, action.playlistData],
      };

    case ADD_TRACK_TO_PLAYLIST:
      return {
        ...state,
        tempTrack: action.track,
      };

    case SWITCH_STATE_OF_PLAYLISTS:
      return {
        ...state,
        playListSwitcher: action.boolean,
      };

    case SET_MY_OWN_PLAYLISTS_DATA:
      return {
        ...state,
        ownPlayLists: action.data,
      };

    case TOGGLE_FETCH:
      return {
        ...state,
        fetch: action.value,
      };
    default:
      return state;
  }
};

export const toggleFetch = (value) => {
  return {
    type: TOGGLE_FETCH,
    value,
  };
};

export const addToPlayList = (img, name, description) => {
  return {
    type: ADD_TO_PLAYLIST,
    playlistData: { img, name, description },
  };
};

export const addTrackToPlayList = (title, author, trackUrl, albumTitle) => {
  return {
    type: ADD_TRACK_TO_PLAYLIST,
    track: { title, author, trackUrl, albumTitle },
  };
};

export const switchStateOfPlayLists = (boolean) => {
  return {
    type: SWITCH_STATE_OF_PLAYLISTS,
    boolean,
  };
};

export const setMyOwnPlayListsData = (data) => {
  return {
    type: SET_MY_OWN_PLAYLISTS_DATA,
    data,
  };
};

export const createNewPlayList = (data) => {
  return (dispatch) => {
    userAPI.createNewPlayList(data).then(() => {
      dispatch(getMyOwnPlayLists())
    })
  }
}

export const deleteOwnPlayList = (id) => {
  return (dispatch) => {
    userAPI.deleteOwnPlayList(id).then(() => {
      dispatch(getMyOwnPlayLists())
    })
  }
}

export const deleteTrackFromPlayList = (id, pid) => {
  return (dispatch) => {
    userAPI.deleteTrack(id,pid).then(() => {
      dispatch(getMyOwnPlayLists())
    })
  }
}

export const updatePlaylist = (id, data) => {
  return (dispatch) => {
    userAPI.updateOwnPlayList(id, data).then((response) => {
      dispatch(getMyOwnPlayLists())
    })
  }
}

export const getMyOwnPlayLists = () => {
  return (dispatch) => {
    dispatch(toggleFetch(true))
    userAPI.getMyOwnPlaylists().then((response) => {
      dispatch(setMyOwnPlayListsData(response));
      dispatch(toggleFetch(false))
    });
  };
};

export default musicPlayListReducer;
