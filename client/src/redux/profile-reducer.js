import { userAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_PROFILE_STATUS = "SET_PROFILE_STATUS";
const CHANGE_STATUS_HANDLER = "CHANGE_STATUS_HANDLER";
const GET_CAPTCHA = "GET_CAPTCHA"

let initialState = {
  PostsData: [],
  profile: null,
  profilePhoto:
    "https://avatars0.githubusercontent.com/u/44378669?s=460&u=079ef1f1a38cec38b2b6ba37b9f71cfccc88ce1f&v=4",
  profileStatus: "Change status",
  captcha: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: Math.random(),
        message: action.text
      };
      let stateCopy = {
        ...state,
        PostsData: [...state.PostsData, newPost],
      };
      return stateCopy;
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }

    case SET_PROFILE_STATUS: {
      return {
        ...state,
        profileStatus: action.status ? action.status : "Change status",
      };
    }

    case CHANGE_STATUS_HANDLER: {
      return {
        ...state,
        profileStatus: action.status,
      };
    }

    case GET_CAPTCHA: {
      return {
        ...state,
        captcha: action.captcha
      }
    }

    default:
      return state;
  }
};

export const addPostActionCreator = (text) => {
  return {
    type: ADD_POST,
    text,
  };
};

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};

export const setProfileStatus = (status) => {
  return {
    type: SET_PROFILE_STATUS,
    status,
  };
};

export const changeStatusHandler = (status) => {
  return {
    type: CHANGE_STATUS_HANDLER,
    status,
  };
};

export const setCaptcha = (captcha) => {
  return {
    type: GET_CAPTCHA,
    captcha
  }
}

export const getCaptcha = () => {
  return (dispatch) => 
  userAPI.getCaptcha().then(response => {
    dispatch(setCaptcha(response.url))
  })

}

export const getProfile = (userId) => {
  return (dispatch) =>
    userAPI.getProfile(userId).then((response) => {
      dispatch(setUserProfile(response));
    });
};

export const getProfileStatus = (userId) => {
  return (dispatch) =>
    userAPI.getProfileStatus(userId).then((response) => {
      dispatch(setProfileStatus(response));
    });
};

export const updateProfileStatus = (status) => {
  return (dispatch) => {
    userAPI.updateProfileStatus(status).then((response) => {
      if (response.resulCode === 0) {
        dispatch(setProfileStatus(status));
      }
    });
  };
};

export default profileReducer;
