import type { State } from "./state";

export const updateArrows = (e: KeyboardEvent, state: State, be: boolean) => {
    const res = /^Arrow(\w+)/.exec(e.key);
    if(res)
        Reflect.set(state.arrow, res[1], be);
}