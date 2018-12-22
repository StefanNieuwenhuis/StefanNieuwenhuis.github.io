import { Author } from './author';

export interface Post {
    id?: string;
    title: string;
    body: string;
    publishDate: Date;
    author: Author;
}
