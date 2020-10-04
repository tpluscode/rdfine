import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { SocialMediaPostingMixin } from './SocialMediaPosting';

export interface BlogPosting<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.SocialMediaPosting<D>, RdfResource<D> {
}

export function BlogPostingMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BlogPostingClass extends SocialMediaPostingMixin(Resource) implements BlogPosting {
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
