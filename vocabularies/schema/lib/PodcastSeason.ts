import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkSeasonMixin } from './CreativeWorkSeason.js';

export interface PodcastSeason<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWorkSeason<D>, RdfResource<D> {
}

export function PodcastSeasonMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<PodcastSeason> & RdfResourceCore> & Base {
  @namespace(schema)
  class PodcastSeasonClass extends CreativeWorkSeasonMixin(Resource) implements Partial<PodcastSeason> {
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

export const fromPointer = createFactory<PodcastSeason>([CreativeWorkSeasonMixin, PodcastSeasonMixin], { types: [schema.PodcastSeason] });
