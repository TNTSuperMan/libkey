import { updateArrows } from "./arrow";
import { updateMetas } from "./meta";
import { defaultState, type State } from "./state"

export const useLibkey = (target: HTMLElement): {
    state: State,
    onupdate: (e: (e: State) => void) => void,
    destroy: ()=>void,
} => {
    const state: State = structuredClone(defaultState);
    const onupdates: ((e: State) => void)[] = [];
    const onkeydown = (e: KeyboardEvent) => {
        updateMetas(e, state);
        updateArrows(e, state, true);
        onupdates.forEach(e=>e(state));
    }
    const onkeyup = (e: KeyboardEvent) => {
        updateMetas(e, state);
        updateArrows(e, state, false);
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