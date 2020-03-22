import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.TVSeason)
  }
}
TVSeasonMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TVSeason)
TVSeasonMixin.Class = TVSeasonImpl