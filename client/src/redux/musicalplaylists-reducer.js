const ADD_TO_PLAYLIST = "ADD_TO_PLAYLIST";
const SWITCH_STATE_OF_PLAYLISTS = "SWITCH_STATE_OF_PLAYLISTS";
const ADD_TRACK_TO_PLAYLIST = "ADD_TRACK_TO_PLAYLIST";

let initialState = {
  ownPlayLists: [],
  playListSwitcher: false,
  tempTrack: null,
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
    default:
      return state;
  }
};

export const addToPlayList = (img, name, description) => {
  return {
    type: ADD_TO_PLAYLIST,
    playlistData: { img, name, description },
  };
};

export const addTrackToPlayList = (title, author) => {
  return {
    type: ADD_TRACK_TO_PLAYLIST,
    track: { title, author },
  };
};

export const switchStateOfPlayLists = (boolean) => {
  return {
    type: SWITCH_STATE_OF_PLAYLISTS,
    boolean,
  };
};

export default musicPlayListReducer;
