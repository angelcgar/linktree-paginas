export interface Link {
    title_section:            string;
    subtitle_category_first?: string;
    subtitle_category_two?:   string;
    subtitle_category_three?: string;
    links:                    LinkElement[];
    title?:                   string;
    subtitle1?:               string;
    subtitle2?:               string;
    subtitle3?:               string;
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
