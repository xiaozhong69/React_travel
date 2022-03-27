import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface ProductDetailState {
    loading: boolean;
    error: string | null;
    data: any;
}


const initialState: ProductDetailState = {
    loading: true,
    error: null,
    data: null
};

export const getProductDetail = createAsyncThunk(
    "productDetail/getProductDetail",
    async () => {
        const { data } = await axios.get(`https://www.fastmock.site/mock/ef752190847359716b80418509711210/api/touristRoutes`);
        return data;
    }
)

export const productDetailSlice = createSlice({
    name: 'productDetail',
    initialState,
    reducers: {
        // fetchStart: (state) => {
        //     // return { ...state, loading: true };
        //     state.loading = true;
        // },
        // fetchSuccess: (state, action) => {
        //     state.data = action.payload;
        //     state.loading = false;
        //     state.error = null;
        // },
        // fetchFail: (state, action: PayloadAction<string | null>) => {
        //     state.loading = false;
        //     state.error = action.payload;
        // },
    },
    extraReducers: {
        [getProductDetail.pending.type]: (state) => {
            // return { ...state, loading: true };
            state.loading = true;
        },
        [getProductDetail.fulfilled.type]: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        [getProductDetail.rejected.type]: (state, action: PayloadAction<string | null>) => {
            //   const ddd = action.payload;
            state.loading = false;
            state.error = action.payload;
        },
    }
})