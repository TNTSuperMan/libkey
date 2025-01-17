export type State = {
    ctrl: boolean,
    alt: boolean,
    shift: boolean,
    arrow: {
        left: boolean,
        right: boolean,
        up: boolean,
        down: boolean
    },
    keys: Set<string>
};
export const defaultState: () => State = () => ({
    ctrl: false,
    alt: false,
    shift: false,
    arrow: {
        left: false,
        right: false,
        up: false,
        down: false
    },
    keys: new Set
});