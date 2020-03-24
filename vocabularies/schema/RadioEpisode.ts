import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import EpisodeMixin from './Episode';

export interface RadioEpisode extends Schema.Episode, RdfResource {
}

export default function RadioEpisodeMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RadioEpisodeClass extends EpisodeMixin(Resource) implements RadioEpisode {
  }
  return RadioEpisodeClass
}

class RadioEpisodeImpl extends RadioEpisodeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<RadioEpisode>) {
    super(arg)
    this.types.add(schema.RadioEpisode)
    initializeProperties(this, init)
  }
}
RadioEpisodeMixin.shouldApply = (r: RdfResource) => r.types.has(schema.RadioEpisode)
RadioEpisodeMixin.Class = RadioEpisodeImpl
