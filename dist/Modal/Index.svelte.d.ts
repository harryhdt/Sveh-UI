import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        show?: boolean | undefined;
        disableEsc?: boolean | undefined;
        class?: string | undefined;
        onClose?: (() => any) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        button: {
            toggleShow: () => boolean;
        };
        default: {
            toggleShow: () => boolean;
        };
    };
};
export type IndexProps = typeof __propDef.props;
export type IndexEvents = typeof __propDef.events;
export type IndexSlots = typeof __propDef.slots;
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
export {};
