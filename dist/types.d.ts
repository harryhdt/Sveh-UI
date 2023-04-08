export type ButtonType = 'button' | 'submit' | 'reset' | null | undefined;
export type ButtonSize = 'small' | 'medium' | 'big';
export type ButtonVariant = 'solid' | 'outlined';
export type ButtonColor = 'primary' | 'secondary' | 'error' | 'warning' | 'success' | 'info';
export type ButtonAlign = 'left' | 'center' | 'right';
export type TextInputSize = 'small' | 'medium' | 'big';
export type TypeProps = 'text' | 'email' | 'password' | 'multiline';
export type AutocompleteProps = 'off' | 'on' | string;
export type ColorProps = 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
export type ColorValues = {
    primary: string;
    secondary: string;
    success: string;
    error: string;
    info: string;
    warning: string;
};
export type KeyText = {
    key: string | number;
    text: string;
    hide?: boolean;
    disabled?: boolean;
};
export type KeyClass = {
    key: string | number;
    class?: string;
};
export type KeyTextClass = {
    key: string | number;
    text: string;
    class?: string;
    hide?: boolean;
    disabled?: boolean;
};
export type MetaProps = {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
    first_page: number;
    first_page_url: string | null;
    last_page_url: string;
    next_page_url: string;
    previous_page_url: string | null;
};
export type DataStatus = 'loading' | 'error' | null | undefined;
