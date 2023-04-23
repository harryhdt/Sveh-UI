import { SvelteComponentTyped } from "svelte";
import type { ColorProps, TextInputSize } from '../types';
declare const __propDef: {
    props: {
        color: ColorProps;
        message: string;
        class?: string | undefined;
        closeAble?: boolean | undefined;
        size?: TextInputSize | undefined;
    };
    events: {
        close: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type IndexProps = typeof __propDef.props;
export type IndexEvents = typeof __propDef.events;
export type IndexSlots = typeof __propDef.slots;
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
export {};
