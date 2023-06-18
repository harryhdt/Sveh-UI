import { SvelteComponentTyped } from "svelte";
import type { DataStatus, KeyText, TextInputSize } from '../types';
declare const __propDef: {
    props: {
        data?: DataStatus | KeyText[];
        name: any;
        show?: boolean | undefined;
        value?: string[] | number[] | boolean[] | undefined;
        label?: string | undefined;
        placeholder?: string | undefined;
        error?: string | undefined;
        helper?: string | undefined;
        class?: string | undefined;
        containerClass?: string | undefined;
        optionAreaClass?: string | undefined;
        search?: boolean | undefined;
        required?: boolean | undefined;
        disabled?: boolean | undefined;
        disableEsc?: boolean | undefined;
        size?: TextInputSize | undefined;
    };
    events: {
        change: Event;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        'suffix-label': {};
    };
};
export type IndexProps = typeof __propDef.props;
export type IndexEvents = typeof __propDef.events;
export type IndexSlots = typeof __propDef.slots;
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
export {};
