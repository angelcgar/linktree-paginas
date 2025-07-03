export interface Link {
    title_section: string;
    links:         LinkElement[];
}

export interface LinkElement {
    href: string;
    img:  Img;
    span: string;
}

export interface Img {
    src: string;
    alt: string;
}
