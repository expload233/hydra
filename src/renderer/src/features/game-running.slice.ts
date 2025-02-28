import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { GameRunning } from "@types";

export interface GameRunningState {
  gameRunning: GameRunning | null;
}

const initialState: GameRunningState = {
  gameRunning: null,
};

export const gameRunningSlice = createSlice({
  name: "game-running",
  initialState,
  reducers: {
    setGameRunning: (state, action: PayloadAction<GameRunning | null>) => {
      state.gameRunning = action.payload;
    },
  },
});

export const { setGameRunning } = gameRunningSlice.actions;
