import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: string | number;
  ownerId?: number;
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  profileImage: string | null;
  alternativemail: string;
  startdate: string | null;
  business_entity: string;
  ae_commission_threshold: number | string;
  ae_escrow_commission: number | string;
  ae_title_commission: number | string;
  career_path: number | string;
  lead_source: number | string;
  notes: string;
  exclude_challenges_leaderboards: boolean;
  download_transactions: boolean;
  send_welcome_email: boolean;
  createdAt: string;
}

export interface AuthState {
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
    updateUserState: (state, action: PayloadAction<User>) => {
      if (state.user) {
        state.user = {
          ...state.user,
          ...action.payload,
        };
      }
    },
    clearAuth: (state) => {
      state.access_token = null;
      state.user = null;
    },
  },
});

export const { setAuth, updateUserState, clearAuth } = authSlice.actions;
export default authSlice.reducer;
