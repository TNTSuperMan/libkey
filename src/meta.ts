import type { State } from "./state";

export const updateMetas = (e: KeyboardEvent, state: State) => {
    state.ctrl = e.ctrlKey;
    state.alt = e.altKey;
    state.shift = e.shiftKey;
}
