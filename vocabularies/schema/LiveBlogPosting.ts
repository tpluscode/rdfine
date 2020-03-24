import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.LiveBlogPosting)
  }
}
LiveBlogPostingMixin.shouldApply = (r: RdfResource) => r.types.has(schema.LiveBlogPosting)
LiveBlogPostingMixin.Class = LiveBlogPostingImpl
