import { SvelteComponentTyped } from "svelte";
import type { ButtonAlign, ButtonColor, ButtonSize, ButtonType, ButtonVariant } from '../types';
declare const __propDef: {
    props: {
        type?: ButtonType;
        variant?: ButtonVariant | undefined;
        disabled?: boolean | undefined;
        size?: ButtonSize | undefined;
        color?: ButtonColor | undefined;
        class?: string | undefined;
        fullWidth?: boolean | undefined;
        align?: ButtonAlign | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type IndexProps = typeof __propDef.props;
export type IndexEvents = typeof __propDef.events;
export type IndexSlots = typeof __propDef.slots;
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
export {};
