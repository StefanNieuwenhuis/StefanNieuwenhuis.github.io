import { Author } from './author';
export interface Post {
    title: string;
    body: string;
    publishDate: string;
    author: Author;
    image?: Image;
}

export interface Image {
    src: string;
    alt: string;
}
