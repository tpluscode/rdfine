import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { SocialMediaPostingMixin } from './SocialMediaPosting.js';

export interface DiscussionForumPosting<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.SocialMediaPosting<D>, RdfResource<D> {
}

export function DiscussionForumPostingMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<DiscussionForumPosting> & RdfResourceCore> & Base {
  @namespace(schema)
  class DiscussionForumPostingClass extends SocialMediaPostingMixin(Resource) implements Partial<DiscussionForumPosting> {
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

export const fromPointer = createFactory<DiscussionForumPosting>([SocialMediaPostingMixin, DiscussionForumPostingMixin], { types: [schema.DiscussionForumPosting] });
