import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ArticleMixin } from './Article';

export interface SocialMediaPosting<ID extends ResourceNode = ResourceNode> extends Schema.Article<ID>, RdfResource<ID> {
  sharedContent: Schema.CreativeWork<SiblingNode<ID>> | undefined;
}

export function SocialMediaPostingMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SocialMediaPostingClass extends ArticleMixin(Resource) implements SocialMediaPosting {
    @property.resource()
    sharedContent: Schema.CreativeWork | undefined;
  }
  return SocialMediaPostingClass
}

class SocialMediaPostingImpl extends SocialMediaPostingMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SocialMediaPosting>) {
    super(arg, init)
    this.types.add(schema.SocialMediaPosting)
  }

  static readonly __mixins: Mixin[] = [SocialMediaPostingMixin, ArticleMixin];
}
SocialMediaPostingMixin.appliesTo = schema.SocialMediaPosting
SocialMediaPostingMixin.Class = SocialMediaPostingImpl
