import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface Episode<ID extends ResourceNode = ResourceNode> extends Schema.CreativeWork<ID>, RdfResource<ID> {
  actor: Schema.Person<SiblingNode<ID>> | undefined;
  actors: Schema.Person<SiblingNode<ID>> | undefined;
  director: Schema.Person<SiblingNode<ID>> | undefined;
  directors: Schema.Person<SiblingNode<ID>> | undefined;
  episodeNumber: number | string | undefined;
  musicBy: Schema.MusicGroup<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  partOfSeason: Schema.CreativeWorkSeason<SiblingNode<ID>> | undefined;
  partOfSeries: Schema.CreativeWorkSeries<SiblingNode<ID>> | undefined;
  productionCompany: Schema.Organization<SiblingNode<ID>> | undefined;
  trailer: Schema.VideoObject<SiblingNode<ID>> | undefined;
}

export function EpisodeMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class EpisodeClass extends CreativeWorkMixin(Resource) implements Episode {
    @property.resource()
    actor: Schema.Person | undefined;
    @property.resource()
    actors: Schema.Person | undefined;
    @property.resource()
    director: Schema.Person | undefined;
    @property.resource()
    directors: Schema.Person | undefined;
    @property.literal()
    episodeNumber: number | string | undefined;
    @property.resource()
    musicBy: Schema.MusicGroup | Schema.Person | undefined;
    @property.resource()
    partOfSeason: Schema.CreativeWorkSeason | undefined;
    @property.resource()
    partOfSeries: Schema.CreativeWorkSeries | undefined;
    @property.resource()
    productionCompany: Schema.Organization | undefined;
    @property.resource()
    trailer: Schema.VideoObject | undefined;
  }
  return EpisodeClass
}

class EpisodeImpl extends EpisodeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Episode>) {
    super(arg, init)
    this.types.add(schema.Episode)
  }

  static readonly __mixins: Mixin[] = [EpisodeMixin, CreativeWorkMixin];
}
EpisodeMixin.appliesTo = schema.Episode
EpisodeMixin.Class = EpisodeImpl
