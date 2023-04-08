import { SvelteComponentTyped } from "svelte";
import type { KeyText, TextInputSize } from '../types';
declare const __propDef: {
    props: {
        name: string;
        text?: string | undefined;
        value?: boolean | undefined;
        values?: (string | number)[] | undefined;
        label?: string | undefined;
        error?: string | undefined;
        helper?: string | undefined;
        required?: boolean | undefined;
        disabled?: boolean | undefined;
        class?: string | undefined;
        containerClass?: string | undefined;
        optionsClass?: string | undefined;
        options?: (KeyText & {
            checked?: boolean | undefined;
        })[] | undefined;
        valueAsNumber?: boolean | undefined;
        size?: TextInputSize | undefined;
        single?: boolean | undefined;
    };
    events: {
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
