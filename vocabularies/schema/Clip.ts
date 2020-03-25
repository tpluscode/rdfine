import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface Clip extends Schema.CreativeWork, RdfResource {
  actor: Schema.Person;
  actors: Schema.Person;
  clipNumber: number | string;
  director: Schema.Person;
  directors: Schema.Person;
  musicBy: Schema.MusicGroup | Schema.Person;
  partOfEpisode: Schema.Episode;
  partOfSeason: Schema.CreativeWorkSeason;
  partOfSeries: Schema.CreativeWorkSeries;
}

export default function ClipMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ClipClass extends CreativeWorkMixin(Resource) implements Clip {
    @property.resource()
    actor!: Schema.Person;
    @property.resource()
    actors!: Schema.Person;
    @property.literal()
    clipNumber!: number | string;
    @property.resource()
    director!: Schema.Person;
    @property.resource()
    directors!: Schema.Person;
    @property.resource()
    musicBy!: Schema.MusicGroup | Schema.Person;
    @property.resource()
    partOfEpisode!: Schema.Episode;
    @property.resource()
    partOfSeason!: Schema.CreativeWorkSeason;
    @property.resource()
    partOfSeries!: Schema.CreativeWorkSeries;
  }
  return ClipClass
}

class ClipImpl extends ClipMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Clip>) {
    super(arg)
    this.types.add(schema.Clip)
    initializeProperties<Clip>(this, init)
  }
}
ClipMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Clip)
ClipMixin.Class = ClipImpl
