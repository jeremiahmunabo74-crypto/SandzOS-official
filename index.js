// core/main.go
package main
import (
    "net/http"
    "github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{}
func main() {
    http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
        conn, _ := upgrader.Upgrade(w, r, nil)
        for {
            _, msg, _ := conn.ReadMessage()
            // Example: respond to "list" command
            if string(msg) == "list" {
                conn.WriteMessage(1, []byte(`[\"notes.txt\", \"todo.md\"]`))
            }
        }
    })
    http.ListenAndServe(":8765", nil)
}
import { listFiles } from "./goBridge";
useEffect(() => {
  listFiles().then(setFiles);
}, []);
