import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import ArticleMixin from './Article';

export interface SocialMediaPosting extends Schema.Article, RdfResource {
  sharedContent: Schema.CreativeWork;
}

export default function SocialMediaPostingMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SocialMediaPostingClass extends ArticleMixin(Resource) implements SocialMediaPosting {
    @property.resource()
    sharedContent!: Schema.CreativeWork;
  }
  return SocialMediaPostingClass
}

class SocialMediaPostingImpl extends SocialMediaPostingMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.SocialMediaPosting)
  }
}
SocialMediaPostingMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SocialMediaPosting)
SocialMediaPostingMixin.Class = SocialMediaPostingImpl