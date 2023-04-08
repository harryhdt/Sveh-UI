import { SvelteComponentTyped } from "svelte";
import type { TextInputSize } from '../types';
declare const __propDef: {
    props: {
        name: string;
        file?: File | null | undefined;
        files?: FileList | null | undefined;
        placeholder?: string | undefined;
        label?: string | undefined;
        accept?: string | undefined;
        error?: string | undefined;
        helper?: string | undefined;
        required?: boolean | undefined;
        disabled?: boolean | undefined;
        multiple?: boolean | undefined;
        class?: string | undefined;
        containerClass?: string | undefined;
        onClearFiles?: (() => void) | null | undefined;
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
