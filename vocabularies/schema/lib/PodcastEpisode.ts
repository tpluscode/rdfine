import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { EpisodeMixin } from './Episode.js';

export interface PodcastEpisode<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Episode<D>, RdfResource<D> {
}

export function PodcastEpisodeMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<PodcastEpisode> & RdfResourceCore> & Base {
  @namespace(schema)
  class PodcastEpisodeClass extends EpisodeMixin(Resource) implements Partial<PodcastEpisode> {
  }
  return PodcastEpisodeClass
}

class PodcastEpisodeImpl extends PodcastEpisodeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PodcastEpisode>) {
    super(arg, init)
    this.types.add(schema.PodcastEpisode)
  }

  static readonly __mixins: Mixin[] = [PodcastEpisodeMixin, EpisodeMixin];
}
PodcastEpisodeMixin.appliesTo = schema.PodcastEpisode
PodcastEpisodeMixin.Class = PodcastEpisodeImpl

export const fromPointer = createFactory<PodcastEpisode>([EpisodeMixin, PodcastEpisodeMixin], { types: [schema.PodcastEpisode] });
