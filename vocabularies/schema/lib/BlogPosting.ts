import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { SocialMediaPostingMixin } from './SocialMediaPosting.js';

export interface BlogPosting<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.SocialMediaPosting<D>, rdfine.RdfResource<D> {
}

export function BlogPostingMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<BlogPosting> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class BlogPostingClass extends SocialMediaPostingMixin(Resource) implements Partial<BlogPosting> {
  }
  return BlogPostingClass
}

class BlogPostingImpl extends BlogPostingMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BlogPosting>) {
    super(arg, init)
    this.types.add(schema.BlogPosting)
  }

  static readonly __mixins: Mixin[] = [BlogPostingMixin, SocialMediaPostingMixin];
}
BlogPostingMixin.appliesTo = schema.BlogPosting
BlogPostingMixin.Class = BlogPostingImpl

export const fromPointer = createFactory<BlogPosting>([SocialMediaPostingMixin, BlogPostingMixin], { types: [schema.BlogPosting] });
