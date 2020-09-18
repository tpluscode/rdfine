import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CreativeWorkMixin } from './CreativeWork';

export interface Clip extends Schema.CreativeWork, RdfResource {
  actor: Schema.Person | undefined;
  actors: Schema.Person | undefined;
  clipNumber: number | string | undefined;
  director: Schema.Person | undefined;
  directors: Schema.Person | undefined;
  musicBy: Schema.MusicGroup | Schema.Person | undefined;
  partOfEpisode: Schema.Episode | undefined;
  partOfSeason: Schema.CreativeWorkSeason | undefined;
  partOfSeries: Schema.CreativeWorkSeries | undefined;
}

export function ClipMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ClipClass extends CreativeWorkMixin(Resource) implements Clip {
    @property.resource()
    actor: Schema.Person | undefined;
    @property.resource()
    actors: Schema.Person | undefined;
    @property.literal()
    clipNumber: number | string | undefined;
    @property.resource()
    director: Schema.Person | undefined;
    @property.resource()
    directors: Schema.Person | undefined;
    @property.resource()
    musicBy: Schema.MusicGroup | Schema.Person | undefined;
    @property.resource()
    partOfEpisode: Schema.Episode | undefined;
    @property.resource()
    partOfSeason: Schema.CreativeWorkSeason | undefined;
    @property.resource()
    partOfSeries: Schema.CreativeWorkSeries | undefined;
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
