import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { SocialMediaPostingMixin } from './SocialMediaPosting';

export interface DiscussionForumPosting<ID extends ResourceNode = ResourceNode> extends Schema.SocialMediaPosting<ID>, RdfResource<ID> {
}

export function DiscussionForumPostingMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DiscussionForumPostingClass extends SocialMediaPostingMixin(Resource) implements DiscussionForumPosting {
  }
  return DiscussionForumPostingClass
}

class DiscussionForumPostingImpl extends DiscussionForumPostingMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DiscussionForumPosting>) {
    super(arg, init)
    this.types.add(schema.DiscussionForumPosting)
  }

  static readonly __mixins: Mixin[] = [DiscussionForumPostingMixin, SocialMediaPostingMixin];
}
DiscussionForumPostingMixin.appliesTo = schema.DiscussionForumPosting
DiscussionForumPostingMixin.Class = DiscussionForumPostingImpl
