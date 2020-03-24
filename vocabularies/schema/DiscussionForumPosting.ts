import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.DiscussionForumPosting)
  }
}
DiscussionForumPostingMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DiscussionForumPosting)
DiscussionForumPostingMixin.Class = DiscussionForumPostingImpl
