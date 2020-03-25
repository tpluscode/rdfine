import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface Episode extends Schema.CreativeWork, RdfResource {
  actor: Schema.Person;
  actors: Schema.Person;
  director: Schema.Person;
  directors: Schema.Person;
  episodeNumber: number | string;
  musicBy: Schema.MusicGroup | Schema.Person;
  partOfSeason: Schema.CreativeWorkSeason;
  partOfSeries: Schema.CreativeWorkSeries;
  productionCompany: Schema.Organization;
  trailer: Schema.VideoObject;
}

export default function EpisodeMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class EpisodeClass extends CreativeWorkMixin(Resource) implements Episode {
    @property.resource()
    actor!: Schema.Person;
    @property.resource()
    actors!: Schema.Person;
    @property.resource()
    director!: Schema.Person;
    @property.resource()
    directors!: Schema.Person;
    @property.literal()
    episodeNumber!: number | string;
    @property.resource()
    musicBy!: Schema.MusicGroup | Schema.Person;
    @property.resource()
    partOfSeason!: Schema.CreativeWorkSeason;
    @property.resource()
    partOfSeries!: Schema.CreativeWorkSeries;
    @property.resource()
    productionCompany!: Schema.Organization;
    @property.resource()
    trailer!: Schema.VideoObject;
  }
  return EpisodeClass
}

class EpisodeImpl extends EpisodeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Episode>) {
    super(arg)
    this.types.add(schema.Episode)
    initializeProperties<Episode>(this, init)
  }
}
EpisodeMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Episode)
EpisodeMixin.Class = EpisodeImpl
