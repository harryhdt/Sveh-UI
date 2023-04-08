import { SvelteComponentTyped } from "svelte";
import type { TextInputSize } from '../types';
declare const __propDef: {
    props: {
        name: string;
        label: string;
        value?: string | undefined;
        checked?: boolean | undefined;
        class?: string | undefined;
        error?: string | undefined;
        helper?: string | undefined;
        required?: boolean | undefined;
        containerClass?: string | undefined;
        optionsClass?: string | undefined;
        showText?: boolean | undefined;
        size?: TextInputSize | undefined;
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
