# libkey
キーボードの状態をオブジェクトに。
Keyboard state as object.
## usage
```js
import { useLibkey } from "libkey";
const {state, destroy, onupdate} = useLibKey(window);
console.log("Press ctrl to destroy")
onupdate(()=>{
    console.log("state", state)
    if(state.ctrl){
        destroy()
    }
})
```