import { SvelteComponentTyped } from "svelte";
import type { TextInputSize, TypeProps } from '../types';
declare const __propDef: {
    props: {
        placeholder?: string | undefined;
        name: string;
        type: TypeProps;
        value?: string | undefined;
        label?: string | undefined;
        autocomplete?: string | undefined;
        error?: string | undefined;
        helper?: string | undefined;
        required?: boolean | undefined;
        readonly?: boolean | undefined;
        disabled?: boolean | undefined;
        class?: string | undefined;
        containerClass?: string | undefined;
        rows?: number | undefined;
        size?: TextInputSize | undefined;
    };
    events: {
        input: Event;
        focus: FocusEvent;
        blur: FocusEvent;
        keydown: KeyboardEvent;
        keypress: KeyboardEvent;
        keyup: KeyboardEvent;
        change: Event;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        'suffix-label': {
            slot: string;
        };
    };
};
export type IndexProps = typeof __propDef.props;
export type IndexEvents = typeof __propDef.events;
export type IndexSlots = typeof __propDef.slots;
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
export {};
