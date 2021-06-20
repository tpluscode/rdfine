import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface Movie<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
  actor: Schema.Person<D> | undefined;
  actors: Schema.Person<D> | undefined;
  countryOfOrigin: Schema.Country<D> | undefined;
  director: Schema.Person<D> | undefined;
  directors: Schema.Person<D> | undefined;
  duration: Schema.Duration<D> | undefined;
  musicBy: Schema.MusicGroup<D> | Schema.Person<D> | undefined;
  productionCompany: Schema.Organization<D> | undefined;
  subtitleLanguage: Schema.Language<D> | undefined;
  subtitleLanguageLiteral: string | undefined;
  titleEIDR: string | undefined;
  titleEIDRTerm: RDF.NamedNode | undefined;
  trailer: Schema.VideoObject<D> | undefined;
}

export function MovieMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Movie> & RdfResourceCore> & Base {
  @namespace(schema)
  class MovieClass extends CreativeWorkMixin(Resource) implements Partial<Movie> {
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
    subtitleLanguage: Schema.Language | undefined;
    @property.literal({ path: schema.subtitleLanguage })
    subtitleLanguageLiteral: string | undefined;
    @property.literal()
    titleEIDR: string | undefined;
    @property({ path: schema.titleEIDR })
    titleEIDRTerm: RDF.NamedNode | undefined;
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

export const fromPointer = createFactory<Movie>([CreativeWorkMixin, MovieMixin], { types: [schema.Movie] });
