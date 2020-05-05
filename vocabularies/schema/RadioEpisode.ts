import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { EpisodeMixin } from './Episode';

export interface RadioEpisode extends Schema.Episode, RdfResource {
}

export function RadioEpisodeMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RadioEpisodeClass extends EpisodeMixin(Resource) implements RadioEpisode {
  }
  return RadioEpisodeClass
}

class RadioEpisodeImpl extends RadioEpisodeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RadioEpisode>) {
    super(arg, init)
    this.types.add(schema.RadioEpisode)
  }

  static readonly __mixins: Mixin[] = [RadioEpisodeMixin, EpisodeMixin];
}
RadioEpisodeMixin.appliesTo = schema.RadioEpisode
RadioEpisodeMixin.Class = RadioEpisodeImpl
