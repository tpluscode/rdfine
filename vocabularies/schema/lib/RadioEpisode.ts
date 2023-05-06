import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { EpisodeMixin } from './Episode.js';

export interface RadioEpisode<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Episode<D>, RdfResource<D> {
}

export function RadioEpisodeMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<RadioEpisode> & RdfResourceCore> & Base {
  @namespace(schema)
  class RadioEpisodeClass extends EpisodeMixin(Resource) implements Partial<RadioEpisode> {
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

export const fromPointer = createFactory<RadioEpisode>([EpisodeMixin, RadioEpisodeMixin], { types: [schema.RadioEpisode] });
