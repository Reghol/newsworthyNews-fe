import axios from "axios";
const baseURL = "https://newsworthy-news-nc.herokuapp.com/api";

export const getAllArticles = async (
  topic,
  sort_by,
  page,
  order,
  limit,
  author
) => {
  return await axios
    .get(`${baseURL}/articles`, {
      params: {
        topic,
        author,
        sort_by: sort_by,
        p: page,
        order,
        limit
      }
    })
    .then(({ data }) => {
      return data;
    });
};

export const getArticleById = async id => {
  return await axios.get(`${baseURL}/articles/${id}`).then(({ data }) => {
    return data;
  });
};

export const patchVotesById = async (id, num, type) => {
  return await axios
    .patch(`${baseURL}/${type}/${id}`, { inc_votes: num })
    .then(({ data }) => {
      return data;
    });
};

export const getCommentsByArticleId = async id => {
  return await axios
    .get(`${baseURL}/articles/${id}/comments`)
    .then(({ data }) => {
      return data;
    });
};

export const getAllTopics = async () => {
  return await axios.get(`${baseURL}/topics`).then(({ data }) => {
    return data;
  });
};

export const getAllUsers = async () => {
  return await axios.get(`${baseURL}/users`).then(({ data }) => {
    return data;
  });
};

export const getUserByUsername = async username => {
  return await axios.get(`${baseURL}/users/${username}`).then(user => {
    return user;
  });
};

export const postCommentByArticleId = async (id, comment) => {
  return await axios
    .post(`${baseURL}/articles/${id}/comments`, comment)
    .then(({ data }) => {
      return data;
    });
};

export const deleteCommentById = async id => {
  return await axios.delete(`${baseURL}/comments/${id}`);
};
