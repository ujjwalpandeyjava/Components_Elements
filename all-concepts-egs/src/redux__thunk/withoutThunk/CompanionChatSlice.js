import { createSlice } from "@reduxjs/toolkit";

const companionChatSlice = createSlice({
    name: 'companionChat',
    initialState: {
        chatHistory: [],
        details: {
            user: {
                companion_UserId: "",
                userId: "",
                name: ""
            },
            company: {
                orgId: "",
                companyName: "",
                tagLine: `Ask us anything!
                Ask us about yours health, wellness, appointments, insurance, our services`,
                imagUrl: "https://content.lab.safetylabs.org/photo/USER/7480/7480.jpeg",
                imageAltText: ""
            },
            chat: {

            },
            issUserAuthenticate: null
        },
        otherKey: "Their Values"
    },
    reducers: {
        ADD_QUESTION: (state, action) => {
            state.chatHistory.push(getChatJSON(typeOfChatMessage.QUESTION, action.payload.question))
        },
        ADD_ANSWER: (state, action) => {
            state.chatHistory.push(getChatJSON(typeOfChatMessage.ANSWER, action.payload.answer))
        },
        ADD_API_ERROR: (state, action) => {
            state.chatHistory.push(getChatJSON(typeOfChatMessage.API_ERROR, action.payload.errorMessage))
        },
        CLEAR_CHAT: (state, action) => {
            state.chatHistory.length = 0;
        },
        SET__USER_COMPANY_ID: (state, action) => {
            state.details.user.companion_UserId = action.payload;
        },
        SET_USER_AUTHENTICATED_STATUS: (state, action) => {
            state.details.issUserAuthenticate = action.payload;
        }
    }
});

function getChatJSON(chatType, textToAdd) {
    switch (chatType) {
        case typeOfChatMessage.QUESTION:
            return {
                isAnswer: false,
                isQuestion: true,
                text: textToAdd
            }
        case typeOfChatMessage.ANSWER:
            return {
                isAnswer: true,
                isQuestion: false,
                text: textToAdd
            }
        case typeOfChatMessage.API_ERROR:
            return {
                isAnswer: false,
                isQuestion: false,
                text: textToAdd
            }
        default:
            return null;
    }
}

const typeOfChatMessage = {
    QUESTION: "QUESTION",
    API_ERROR: "API_ERROR",
    ANSWER: "ANSWER"
}
Object.freeze(typeOfChatMessage);


export const { ADD_QUESTION, ADD_ANSWER, ADD_API_ERROR, SET__USER_COMPANY_ID, CLEAR_CHAT, SET_USER_AUTHENTICATED_STATUS } = companionChatSlice.actions;
export default companionChatSlice.reducer;