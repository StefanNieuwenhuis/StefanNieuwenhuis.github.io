import {Generator} from './generator';
import {Post} from '../../models/post';

export class PostGenerator extends Generator<Post> {
  public generate(data: Partial<Post>): Post {
    return {
      title: data.title || 'TEST POST TITLE A',
      publishDate: data.publishDate || '22-05-1987',
      author: {name: data.author && data.author.name ? data.author.name : 'drs. Nieuwenhuis'},
      body: data.body || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat nibh sed lorem dictum, sit amet luctus velit vehicula.'
    };
  }
}
