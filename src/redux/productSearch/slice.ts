import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface ProductSearchState {
    loading: boolean;
    error: string | null;
    data: any;
    pagination:any;
}


const initialState: ProductSearchState = {
    loading: true,
    error: null,
    data: null,
    pagination:null
};

export const SearchProduct = createAsyncThunk(
    "productSearch/SearchProduct",
    async () => {
        const { data } = await axios.get(`https://www.fastmock.site/mock/ef752190847359716b80418509711210/api/searchRoutes`);
        return data;
    }
)

export const productSearchSlice = createSlice({
    name: 'productSearch',
    initialState,
    reducers: {},
    extraReducers: {
        [SearchProduct.pending.type]: (state) => {
            // return { ...state, loading: true };
            state.loading = true;
        },
        [SearchProduct.fulfilled.type]: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        [SearchProduct.rejected.type]: (state, action: PayloadAction<string | null>) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
})