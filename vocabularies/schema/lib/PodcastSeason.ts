import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkSeasonMixin } from './CreativeWorkSeason.js';

export interface PodcastSeason<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWorkSeason<D>, rdfine.RdfResource<D> {
}

export function PodcastSeasonMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<PodcastSeason & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class PodcastSeasonClass extends CreativeWorkSeasonMixin(Resource) {
  }
  return PodcastSeasonClass as any
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

export const fromPointer = createFactory<PodcastSeason>([CreativeWorkSeasonMixin, PodcastSeasonMixin], { types: [schema.PodcastSeason] });
