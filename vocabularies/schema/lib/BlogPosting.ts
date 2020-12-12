import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { SocialMediaPostingMixin } from './SocialMediaPosting';

export interface BlogPosting<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.SocialMediaPosting<D>, RdfResource<D> {
}

export function BlogPostingMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<BlogPosting> & RdfResourceCore> & Base {
  @namespace(schema)
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
