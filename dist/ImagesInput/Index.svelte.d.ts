import { SvelteComponentTyped } from "svelte";
import type { TextInputSize } from '../types';
declare const __propDef: {
    props: {
        class?: string | undefined;
        containerClass?: string | undefined;
        files?: FileList | null | undefined;
        label?: string | undefined;
        name?: string | undefined;
        placeholder?: string | undefined;
        accept?: string | undefined;
        required?: boolean | undefined;
        disabled?: boolean | undefined;
        error?: string | undefined;
        imageReal?: string[] | null | undefined;
        deleteImageReal?: ((i: number) => void) | undefined;
        size?: TextInputSize | undefined;
        helper?: string | undefined;
        onClearFiles?: (() => void) | null | undefined;
    };
    events: {
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
