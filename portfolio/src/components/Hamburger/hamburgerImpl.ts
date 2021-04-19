export interface ContentsImpl {
    link: string;
    label: string;
}

export interface HamburgerMenuContentImpl {
    isOpen: boolean;
    contents: ContentsImpl[];
}