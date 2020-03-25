import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import BlogPostingMixin from './BlogPosting';

export interface LiveBlogPosting extends Schema.BlogPosting, RdfResource {
  coverageEndTime: Date;
  coverageStartTime: Date;
  liveBlogUpdate: Schema.BlogPosting;
}

export default function LiveBlogPostingMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LiveBlogPostingClass extends BlogPostingMixin(Resource) implements LiveBlogPosting {
    @property.literal()
    coverageEndTime!: Date;
    @property.literal()
    coverageStartTime!: Date;
    @property.resource()
    liveBlogUpdate!: Schema.BlogPosting;
  }
  return LiveBlogPostingClass
}

class LiveBlogPostingImpl extends LiveBlogPostingMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<LiveBlogPosting>) {
    super(arg)
    this.types.add(schema.LiveBlogPosting)
    initializeProperties<LiveBlogPosting>(this, init)
  }
}
LiveBlogPostingMixin.shouldApply = (r: RdfResource) => r.types.has(schema.LiveBlogPosting)
LiveBlogPostingMixin.Class = LiveBlogPostingImpl
