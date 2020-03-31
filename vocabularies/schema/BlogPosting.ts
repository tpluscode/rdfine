import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import SocialMediaPostingMixin from './SocialMediaPosting';

export interface BlogPosting extends Schema.SocialMediaPosting, RdfResource {
}

export default function BlogPostingMixin<Base extends Constructor>(Resource: Base) {
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
}
BlogPostingMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BlogPosting)
BlogPostingMixin.Class = BlogPostingImpl
