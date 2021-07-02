export const findCommentReducers = (state = [], action) => {
  switch (action.type) {
    case "FIND_COMMENT":
      return action.payload.data.filter(
        (cmt) => cmt.postId === action.payload.id
      );
    default:
      return state;
  }
};
