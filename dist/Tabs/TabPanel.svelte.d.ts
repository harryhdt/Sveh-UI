import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        key: string;
        development?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TabPanelProps = typeof __propDef.props;
export type TabPanelEvents = typeof __propDef.events;
export type TabPanelSlots = typeof __propDef.slots;
export default class TabPanel extends SvelteComponentTyped<TabPanelProps, TabPanelEvents, TabPanelSlots> {
}
export {};
