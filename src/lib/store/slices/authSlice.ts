import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface User {
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  alternativemail: string;
  business_entity: string;
  ae_commission_threshold: number;
  ae_escrow_commission: number;
  ae_title_commission: number;
  career_path: number;
  lead_source: number;
  notes: string;
  exclude_challenges_leaderboards: boolean;
  download_transactions: boolean;
  send_welcome_email: boolean;
  profileImage: string | null;
  startdate: string | null;
  id: string;
  createdAt: string;
}

interface AuthState {
  access_token: string | null;
  user: User | null;
}

const initialState: AuthState = {
  access_token: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthState>) => {
      state.access_token = action.payload.access_token;
      state.user = action.payload.user;
    },
    clearAuth: (state) => {
      state.access_token = null;
      state.user = null;
    },
  },
});

export const { setAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;
