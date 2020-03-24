import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<TVEpisode>) {
    super(arg)
    this.types.add(schema.TVEpisode)
    initializeProperties(this, init)
  }
}
TVEpisodeMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TVEpisode)
TVEpisodeMixin.Class = TVEpisodeImpl
