import { INIT_STATE } from "../../constants";
import { getPosts, getType, createPost, updatePost } from "../actions";

export default function postsReducers(state = INIT_STATE.posts, action) {
  const { type, payload } = action;

  switch (type) {
    case getType(getPosts.getPostsRequest): // case 'getPostsRequest'
      return {
        ...state,
        isLoading: true,
      };

    case getType(getPosts.getPostsSuccess):
      return {
        ...state,
        data: payload,
        isLoading: false,
      };

    case getType(getPosts.getPostsFailure):
      return {
        ...state,
        isLoading: false,
      };

    case getType(createPost.createPostSuccess):
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case getType(updatePost.updatePostSuccess):
      return {
        ...state,
        data: state.data.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };

    default:
      return state;
  }
}
