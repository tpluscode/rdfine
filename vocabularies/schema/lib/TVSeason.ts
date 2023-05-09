import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';
import { CreativeWorkSeasonMixin } from './CreativeWorkSeason.js';

export interface TVSeason<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, Schema.CreativeWorkSeason<D>, rdfine.RdfResource<D> {
  countryOfOrigin: Schema.Country<D> | undefined;
  partOfTVSeries: Schema.TVSeries<D> | undefined;
}

export function TVSeasonMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<TVSeason> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class TVSeasonClass extends CreativeWorkSeasonMixin(CreativeWorkMixin(Resource)) implements Partial<TVSeason> {
    @rdfine.property.resource()
    countryOfOrigin: Schema.Country | undefined;
    @rdfine.property.resource()
    partOfTVSeries: Schema.TVSeries | undefined;
  }
  return TVSeasonClass
}

class TVSeasonImpl extends TVSeasonMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TVSeason>) {
    super(arg, init)
    this.types.add(schema.TVSeason)
  }

  static readonly __mixins: Mixin[] = [TVSeasonMixin, CreativeWorkMixin, CreativeWorkSeasonMixin];
}
TVSeasonMixin.appliesTo = schema.TVSeason
TVSeasonMixin.Class = TVSeasonImpl

export const fromPointer = createFactory<TVSeason>([CreativeWorkSeasonMixin, CreativeWorkMixin, TVSeasonMixin], { types: [schema.TVSeason] });
