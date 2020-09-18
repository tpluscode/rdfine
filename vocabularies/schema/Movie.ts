import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CreativeWorkMixin } from './CreativeWork';

export interface Movie extends Schema.CreativeWork, RdfResource {
  actor: Schema.Person | undefined;
  actors: Schema.Person | undefined;
  countryOfOrigin: Schema.Country | undefined;
  director: Schema.Person | undefined;
  directors: Schema.Person | undefined;
  duration: Schema.Duration | undefined;
  musicBy: Schema.MusicGroup | Schema.Person | undefined;
  productionCompany: Schema.Organization | undefined;
  trailer: Schema.VideoObject | undefined;
}

export function MovieMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MovieClass extends CreativeWorkMixin(Resource) implements Movie {
    @property.resource()
    actor: Schema.Person | undefined;
    @property.resource()
    actors: Schema.Person | undefined;
    @property.resource()
    countryOfOrigin: Schema.Country | undefined;
    @property.resource()
    director: Schema.Person | undefined;
    @property.resource()
    directors: Schema.Person | undefined;
    @property.resource()
    duration: Schema.Duration | undefined;
    @property.resource()
    musicBy: Schema.MusicGroup | Schema.Person | undefined;
    @property.resource()
    productionCompany: Schema.Organization | undefined;
    @property.resource()
    trailer: Schema.VideoObject | undefined;
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
