import C from "../constants";
// export const websocket = new WebSocket("ws://localhost:5000");
export const websocket = new WebSocket(C.WS_URL);

export default {
  getDataFromBackend() {
    const action = JSON.stringify({type: C.WS_REQUEST_DATA});
    websocket.send(action);
  }
};
