import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { EpisodeMixin } from './Episode';

export interface PodcastEpisode<ID extends ResourceNode = ResourceNode> extends Schema.Episode<ID>, RdfResource<ID> {
}

export function PodcastEpisodeMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PodcastEpisodeClass extends EpisodeMixin(Resource) implements PodcastEpisode {
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
