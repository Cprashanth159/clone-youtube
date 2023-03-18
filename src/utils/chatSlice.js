import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "../utils/constants"

const chatSlice = createSlice({
    name:"chat",
    initialState:{
        messages:[

        ],
    },
    reducers:{
        addMessage: (state, action) => {
            // to optimize (every message it add first it remove last message)
            state.messages.splice(LIVE_CHAT_COUNT,1) 
           state.messages.push(action.payload)
        },
    },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;