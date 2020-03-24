import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import SocialMediaPostingMixin from './SocialMediaPosting';

export interface DiscussionForumPosting extends Schema.SocialMediaPosting, RdfResource {
}

export default function DiscussionForumPostingMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DiscussionForumPostingClass extends SocialMediaPostingMixin(Resource) implements DiscussionForumPosting {
  }
  return DiscussionForumPostingClass
}

class DiscussionForumPostingImpl extends DiscussionForumPostingMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<DiscussionForumPosting>) {
    super(arg)
    this.types.add(schema.DiscussionForumPosting)
    initializeProperties(this, init)
  }
}
DiscussionForumPostingMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DiscussionForumPosting)
DiscussionForumPostingMixin.Class = DiscussionForumPostingImpl
