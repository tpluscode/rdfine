import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';
import CreativeWorkSeasonMixin from './CreativeWorkSeason';

export interface TVSeason extends Schema.CreativeWork, Schema.CreativeWorkSeason, RdfResource {
  countryOfOrigin: Schema.Country;
  partOfTVSeries: Schema.TVSeries;
}

export default function TVSeasonMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TVSeasonClass extends CreativeWorkSeasonMixin(CreativeWorkMixin(Resource)) implements TVSeason {
    @property.resource()
    countryOfOrigin!: Schema.Country;
    @property.resource()
    partOfTVSeries!: Schema.TVSeries;
  }
  return TVSeasonClass
}

class TVSeasonImpl extends TVSeasonMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TVSeason>) {
    super(arg, init)
    this.types.add(schema.TVSeason)
  }
}
TVSeasonMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TVSeason)
TVSeasonMixin.Class = TVSeasonImpl
