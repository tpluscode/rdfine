import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CreativeWorkMixin } from './CreativeWork';

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

export function ClipMixin<Base extends Constructor>(Resource: Base) {
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
  constructor(arg: ResourceNode, init?: Initializer<Clip>) {
    super(arg, init)
    this.types.add(schema.Clip)
  }

  static readonly __mixins: Mixin[] = [ClipMixin, CreativeWorkMixin];
}
ClipMixin.appliesTo = schema.Clip
ClipMixin.Class = ClipImpl
