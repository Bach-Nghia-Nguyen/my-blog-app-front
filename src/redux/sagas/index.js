import { takeLatest, call, put } from "redux-saga/effects";
import * as api from "../../api";

import * as actions from "../actions";

function* fetchPostsSaga(action) {
  try {
    const posts = yield call(api.fetchPosts);
    console.log("[posts]", posts);
    yield put(actions.getPosts.getPostsSuccess(posts.data));
  } catch (error) {
    console.error(error);
    yield put(actions.getPosts.getPostsFailure(error));
  }
}

function* createPostSaga(action) {
  try {
    console.log("createPostSaga", { action });
    const post = yield call(api.createPost, action.payload);
    console.log("[createPostSaga - post]", post);
    yield put(actions.createPost.createPostSuccess(post.data));
  } catch (error) {
    console.error(error);
    yield put(actions.createPost.createPostFailure(error));
  }
}

function* updatePostSaga(action) {
  try {
    console.log("updatePostSaga", { action });
    const updatedPost = yield call(api.updatePost, action.payload);
    console.log("[updatePostSaga - post]", updatedPost);
    yield put(actions.updatePost.updatePostSuccess(updatedPost.data));
  } catch (error) {
    console.error(error);
    yield put(actions.updatePost.updatePostFailure(error));
  }
}

function* mySaga() {
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga);
  yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
  yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga);
}

// generator function ES6

export default mySaga;
