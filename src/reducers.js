import { NOT_EKLE, NOT_SIL } from "./actions";

const s10chLocalStorageKey = "s10ch";

const baslangicDegerleri = {
  notlar: [
    {
      id: "75g1IyB8JLehAr0Lr5v3p",
      date: "Fri Feb 03 2023 09:40:27 GMT+0300 (GMT+03:00)",
      body: "Bugün hava çok güzel!|En iyi arkadaşımın en iyi arkadaşı olduğumu öğrendim :)|Kedim iyileşti!",
    },
  ],
};

function localStorageStateYaz(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function localStorageStateOku(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function baslangicNotlariniGetir(key) {
  const eskiNotlar = localStorage.getItem(key);

  if (eskiNotlar) {
    return localStorageStateOku(key);
  } else {
    return baslangicDegerleri;
  }
}
const initialLocale = baslangicNotlariniGetir(s10chLocalStorageKey);

export function reducer(state = initialLocale, action) {
  switch (action.type) {
    case NOT_EKLE:
      const addState = { ...state, notlar: [...state.notlar, action.payload] };
      localStorageStateYaz(s10chLocalStorageKey, addState);
      return addState;
    case NOT_SIL:
      const removeState = {
        ...state,
        notlar: state.notlar.filter((not) => not.id !== action.payload),
      };
      return removeState;
    default:
      return state;
  }
}
