// export const HOST = "http://localhost:5005";
export const HOST = "https://whats-app-backend.vercel.app";

// https://whats-app-backend.vercel.app/
// export const HOST = "http://192.168.0.119:5005";

const authRoute = `${HOST}/api/auth`;
const MESSAGES_ROUTE = `${HOST}/api/messages`;

export const onBoardUserRoute = `${authRoute}/onboarduser`;
export const CHECK_USER_ROUTE = `${authRoute}/check-user`;
export const GET_ALL_CONTACTS = `${authRoute}/get-contacts`;
export const GET_CALL_TOKEN = `${authRoute}/generate-token`;

export const ADD_MESSAGE_ROUTE = `${MESSAGES_ROUTE}/add-message`;
export const GET_MESSAGES_ROUTE = `${MESSAGES_ROUTE}/get-messages`;
export const GET_INITIAL_CONTACTS_ROUTE = `${MESSAGES_ROUTE}/get-initial-contacts`;
export const ADD_AUDIO_MESSAGE_ROUTE = `${MESSAGES_ROUTE}/add-audio-message`;
export const ADD_IMAGE_MESSAGE_ROUTE = `${MESSAGES_ROUTE}/add-image-message`;
