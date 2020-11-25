import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { EpisodeMixin } from './Episode';

export interface RadioEpisode<ID extends ResourceNode = ResourceNode> extends Schema.Episode<ID>, RdfResource<ID> {
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
