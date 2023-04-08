import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        disableEsc?: boolean | undefined;
        show?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        button: {
            setShow: (cond: boolean) => boolean;
        };
        body: {
            setShow: (cond: boolean) => boolean;
        };
    };
};
export type IndexProps = typeof __propDef.props;
export type IndexEvents = typeof __propDef.events;
export type IndexSlots = typeof __propDef.slots;
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
export {};
