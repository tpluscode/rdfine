import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkSeriesMixin } from './CreativeWorkSeries';

export interface RadioSeries<ID extends ResourceNode = ResourceNode> extends Schema.CreativeWorkSeries<ID>, RdfResource<ID> {
  actor: Schema.Person<SiblingNode<ID>> | undefined;
  actors: Schema.Person<SiblingNode<ID>> | undefined;
  containsSeason: Schema.CreativeWorkSeason<SiblingNode<ID>> | undefined;
  director: Schema.Person<SiblingNode<ID>> | undefined;
  directors: Schema.Person<SiblingNode<ID>> | undefined;
  episode: Schema.Episode<SiblingNode<ID>> | undefined;
  episodes: Schema.Episode<SiblingNode<ID>> | undefined;
  musicBy: Schema.MusicGroup<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  numberOfEpisodes: number | undefined;
  numberOfSeasons: number | undefined;
  productionCompany: Schema.Organization<SiblingNode<ID>> | undefined;
  season: Schema.CreativeWorkSeason<SiblingNode<ID>> | undefined;
  seasons: Schema.CreativeWorkSeason<SiblingNode<ID>> | undefined;
  trailer: Schema.VideoObject<SiblingNode<ID>> | undefined;
}

export function RadioSeriesMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RadioSeriesClass extends CreativeWorkSeriesMixin(Resource) implements RadioSeries {
    @property.resource()
    actor: Schema.Person | undefined;
    @property.resource()
    actors: Schema.Person | undefined;
    @property.resource()
    containsSeason: Schema.CreativeWorkSeason | undefined;
    @property.resource()
    director: Schema.Person | undefined;
    @property.resource()
    directors: Schema.Person | undefined;
    @property.resource()
    episode: Schema.Episode | undefined;
    @property.resource()
    episodes: Schema.Episode | undefined;
    @property.resource()
    musicBy: Schema.MusicGroup | Schema.Person | undefined;
    @property.literal({ type: Number })
    numberOfEpisodes: number | undefined;
    @property.literal({ type: Number })
    numberOfSeasons: number | undefined;
    @property.resource()
    productionCompany: Schema.Organization | undefined;
    @property.resource()
    season: Schema.CreativeWorkSeason | undefined;
    @property.resource()
    seasons: Schema.CreativeWorkSeason | undefined;
    @property.resource()
    trailer: Schema.VideoObject | undefined;
  }
  return RadioSeriesClass
}

class RadioSeriesImpl extends RadioSeriesMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RadioSeries>) {
    super(arg, init)
    this.types.add(schema.RadioSeries)
  }

  static readonly __mixins: Mixin[] = [RadioSeriesMixin, CreativeWorkSeriesMixin];
}
RadioSeriesMixin.appliesTo = schema.RadioSeries
RadioSeriesMixin.Class = RadioSeriesImpl
