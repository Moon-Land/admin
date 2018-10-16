import http from "../http";

export const createCard = payload => {
  return http.post("card", payload);
};

export const fetchCard = payload => {
  return http.post("card", payload);
};

export const patchCard = (id, payload) => {
  return http.patch(`card/${id}`, payload);
};
export const deleteCard = id => {
  return http.delete(`card/${id}`);
};
