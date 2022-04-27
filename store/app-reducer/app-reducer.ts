import {createSlice, PayloadAction} from '@reduxjs/toolkit';
// import {AuthorizationStatus} from '../../constants';


// export type CounterState = {
//   authorizationStatus: AuthorizationStatus,
//   mapHoveredOffer: OfferType | null,
//   offerPageData: OfferType | undefined,
//   currentOfferComments: ReviewType[],
// }

export const initialState = {
  // authorizationStatus: AuthorizationStatus.Unknown,
  // mapHoveredOffer: null,
  currencyData: null,
  // currentOfferComments: [],
};

export const appReducer = createSlice({
  name: 'appReducer',
  initialState,
  reducers: {
    setCurrencyData: (state, action) => {
      state.currencyData = action.payload;
    },
  },
});

export const {setCurrencyData} = appReducer.actions;

export default appReducer.reducer;
