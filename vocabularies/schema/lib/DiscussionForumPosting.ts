import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { SocialMediaPostingMixin } from './SocialMediaPosting.js';

export interface DiscussionForumPosting<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.SocialMediaPosting<D>, rdfine.RdfResource<D> {
}

export function DiscussionForumPostingMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<DiscussionForumPosting & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class DiscussionForumPostingClass extends SocialMediaPostingMixin(Resource) {
  }
  return DiscussionForumPostingClass as any
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

export const fromPointer = createFactory<DiscussionForumPosting>([SocialMediaPostingMixin, DiscussionForumPostingMixin], { types: [schema.DiscussionForumPosting] });
