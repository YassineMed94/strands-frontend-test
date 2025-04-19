import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface BreedState {
  breeds: Record<string, number>;
  loading: boolean;
  error: string | null;
}

const initialState: BreedState = {
  breeds: {},
  loading: false,
  error: null,
};

export const fetchBreedsAndImages = createAsyncThunk(
  "breeds/fetchAll",
  async () => {
    const breedListResponse = await axios.get(
      "https://dog.ceo/api/breeds/list/all"
    );
    const breedNames = Object.keys(breedListResponse.data.message);

    const breedCounts = await Promise.all(
      breedNames.map(async (breed) => {
        const imagesRes = await axios.get(
          `https://dog.ceo/api/breed/${breed}/images`
        );
        return { name: breed, count: imagesRes.data.message.length };
      })
    );

    const result: Record<string, number> = {};
    breedCounts.forEach((item) => {
      result[item.name] = item.count;
    });

    return result;
  }
);

const breedsSlice = createSlice({
  name: "breeds",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBreedsAndImages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBreedsAndImages.fulfilled, (state, action) => {
        state.loading = false;
        state.breeds = action.payload;
      })
      .addCase(fetchBreedsAndImages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default breedsSlice.reducer;
