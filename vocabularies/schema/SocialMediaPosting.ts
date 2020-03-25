import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<SocialMediaPosting>) {
    super(arg, init)
    this.types.add(schema.SocialMediaPosting)
  }
}
SocialMediaPostingMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SocialMediaPosting)
SocialMediaPostingMixin.Class = SocialMediaPostingImpl
