import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CreativeWorkMixin } from './CreativeWork';

export interface Movie extends Schema.CreativeWork, RdfResource {
  actor: Schema.Person;
  actors: Schema.Person;
  countryOfOrigin: Schema.Country;
  director: Schema.Person;
  directors: Schema.Person;
  duration: Schema.Duration;
  musicBy: Schema.MusicGroup | Schema.Person;
  productionCompany: Schema.Organization;
  trailer: Schema.VideoObject;
}

export function MovieMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MovieClass extends CreativeWorkMixin(Resource) implements Movie {
    @property.resource()
    actor!: Schema.Person;
    @property.resource()
    actors!: Schema.Person;
    @property.resource()
    countryOfOrigin!: Schema.Country;
    @property.resource()
    director!: Schema.Person;
    @property.resource()
    directors!: Schema.Person;
    @property.resource()
    duration!: Schema.Duration;
    @property.resource()
    musicBy!: Schema.MusicGroup | Schema.Person;
    @property.resource()
    productionCompany!: Schema.Organization;
    @property.resource()
    trailer!: Schema.VideoObject;
  }
  return MovieClass
}

class MovieImpl extends MovieMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Movie>) {
    super(arg, init)
    this.types.add(schema.Movie)
  }

  static readonly __mixins: Mixin[] = [MovieMixin, CreativeWorkMixin];
}
MovieMixin.appliesTo = schema.Movie
MovieMixin.Class = MovieImpl
