import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";

const initialState = {
	sideInfo: {
		open: false,
		type: "contact",
	},
};
const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		toggleSideInfo(state, action) {
			state.sideInfo.open = !state.sideInfo.open;
		},
		updateSideInfoType(state, action) {
			state.sideInfo.type = action.payload.type;
		},
	},
});

export function ToggleSideInfo() {
	return async () => {
		dispatch(appSlice.actions.toggleSideInfo());
	};
}
export function UpdateSideInfoType(type) {
	return async () => {
		dispatch(appSlice.actions.updateSideInfoType({ type }));
	};
}

export default appSlice.reducer;
