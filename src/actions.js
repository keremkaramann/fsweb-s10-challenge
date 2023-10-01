import axios from "axios";

export const NOT_EKLE = "NOT_EKLE";
export const NOT_SIL = "NOT_SIL";

export const FETCH_LOADING = "loading";
export const FETCH_ERROR = "there is a problem fetching";

export function notEkle(not) {
  // ...
  return { type: NOT_EKLE, payload: not };
}

export function notSil(notId) {
  // ...
  return { type: NOT_SIL, payload: notId };
}
export function fetchLoading() {
  // ...
  return { type: FETCH_LOADING };
}
export function fetchError(msg) {
  // ...
  return { type: FETCH_ERROR, payload: msg };
}

export const notEkleAPI = (yeniNot) => (dispatch) => {
  dispatch(fetchLoading());
  axios
    .post("https://httpbin.org/anything", yeniNot)
    .then((res) => {
      if (res.status === 200) {
        // res.data objesi içerisinden ihtiyaç duyduğunuz değeri bulun ve oluşturduğunuz notEkle ile dispatch edin

        return dispatch(notEkle(res.data.json));
      }
    })
    .catch((error) => {
      dispatch(fetchError(error));
    });
};

export const notSilAPI = (id) => (dispatch) => {
  dispatch(fetchLoading());
  axios
    .delete("https://httpbin.org/anything", { data: id })
    .then((res) => {
      if (res.status === 200) {
        // res.data objesi içerisinden ihtiyaç duyduğunuz değeri bulun ve oluşturduğunuz notSil ile dispatch edin
        return dispatch(notSilAPI(res.data.json));
      }
    })
    .catch((error) => {
      dispatch(fetchError(error));
    });
};
