import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import EpisodeMixin from './Episode';

export interface TVEpisode extends Schema.Episode, RdfResource {
  countryOfOrigin: Schema.Country;
  partOfTVSeries: Schema.TVSeries;
}

export default function TVEpisodeMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TVEpisodeClass extends EpisodeMixin(Resource) implements TVEpisode {
    @property.resource()
    countryOfOrigin!: Schema.Country;
    @property.resource()
    partOfTVSeries!: Schema.TVSeries;
  }
  return TVEpisodeClass
}

class TVEpisodeImpl extends TVEpisodeMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.TVEpisode)
  }
}
TVEpisodeMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TVEpisode)
TVEpisodeMixin.Class = TVEpisodeImpl
