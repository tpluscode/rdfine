import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { CreativeWorkMixin } from './CreativeWork';

export interface CreativeWorkSeason extends Schema.CreativeWork, RdfResource {
  actor: Schema.Person;
  director: Schema.Person;
  endDate: Date;
  episode: Schema.Episode;
  episodes: Schema.Episode;
  numberOfEpisodes: number;
  partOfSeries: Schema.CreativeWorkSeries;
  productionCompany: Schema.Organization;
  seasonNumber: number | string;
  startDate: Date;
  trailer: Schema.VideoObject;
}

export function CreativeWorkSeasonMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CreativeWorkSeasonClass extends CreativeWorkMixin(Resource) implements CreativeWorkSeason {
    @property.resource()
    actor!: Schema.Person;
    @property.resource()
    director!: Schema.Person;
    @property.literal()
    endDate!: Date;
    @property.resource()
    episode!: Schema.Episode;
    @property.resource()
    episodes!: Schema.Episode;
    @property.literal({ type: Number })
    numberOfEpisodes!: number;
    @property.resource()
    partOfSeries!: Schema.CreativeWorkSeries;
    @property.resource()
    productionCompany!: Schema.Organization;
    @property.literal()
    seasonNumber!: number | string;
    @property.literal()
    startDate!: Date;
    @property.resource()
    trailer!: Schema.VideoObject;
  }
  return CreativeWorkSeasonClass
}

class CreativeWorkSeasonImpl extends CreativeWorkSeasonMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CreativeWorkSeason>) {
    super(arg, init)
    this.types.add(schema.CreativeWorkSeason)
  }
}
CreativeWorkSeasonMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CreativeWorkSeason)
CreativeWorkSeasonMixin.Class = CreativeWorkSeasonImpl
