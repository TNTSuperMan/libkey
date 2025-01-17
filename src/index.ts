import { updateArrows } from "./arrow";
import { updateMetas } from "./meta";
import { defaultState, type State } from "./state"

export const useLibkey = (target: HTMLElement): {
    state: State,
    onupdate: (e: (e: State) => void) => void,
    destroy: ()=>void,
} => {
    const state: State = defaultState();
    const onupdates: ((e: State) => void)[] = [];
    const onkeydown = (e: KeyboardEvent) => {
        updateMetas(e, state);
        updateArrows(e, state, true);
        state.keys.add(e.code);
        onupdates.forEach(e=>e(state));
    }
    const onkeyup = (e: KeyboardEvent) => {
        updateMetas(e, state);
        updateArrows(e, state, false);
        if(state.keys.has(e.code)) state.keys.delete(e.code);
        onupdates.forEach(e=>e(state));
    }
    target.addEventListener("keydown", onkeydown);
    target.addEventListener("keyup", onkeyup);
    return {
        state: new Proxy(state, {get: Reflect.get, set: ()=>false}),
        onupdate:e=>onupdates.push(e),
        destroy(){
            target.removeEventListener("keydown", onkeydown);
            target.removeEventListener("keyup", onkeyup);
        }
    }
}