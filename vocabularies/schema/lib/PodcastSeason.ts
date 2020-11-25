import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkSeasonMixin } from './CreativeWorkSeason';

export interface PodcastSeason<ID extends ResourceNode = ResourceNode> extends Schema.CreativeWorkSeason<ID>, RdfResource<ID> {
}

export function PodcastSeasonMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PodcastSeasonClass extends CreativeWorkSeasonMixin(Resource) implements PodcastSeason {
  }
  return PodcastSeasonClass
}

class PodcastSeasonImpl extends PodcastSeasonMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PodcastSeason>) {
    super(arg, init)
    this.types.add(schema.PodcastSeason)
  }

  static readonly __mixins: Mixin[] = [PodcastSeasonMixin, CreativeWorkSeasonMixin];
}
PodcastSeasonMixin.appliesTo = schema.PodcastSeason
PodcastSeasonMixin.Class = PodcastSeasonImpl
