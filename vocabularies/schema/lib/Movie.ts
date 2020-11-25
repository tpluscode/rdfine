import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface Movie<ID extends ResourceNode = ResourceNode> extends Schema.CreativeWork<ID>, RdfResource<ID> {
  actor: Schema.Person<SiblingNode<ID>> | undefined;
  actors: Schema.Person<SiblingNode<ID>> | undefined;
  countryOfOrigin: Schema.Country<SiblingNode<ID>> | undefined;
  director: Schema.Person<SiblingNode<ID>> | undefined;
  directors: Schema.Person<SiblingNode<ID>> | undefined;
  duration: Schema.Duration<SiblingNode<ID>> | undefined;
  musicBy: Schema.MusicGroup<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  productionCompany: Schema.Organization<SiblingNode<ID>> | undefined;
  subtitleLanguage: Schema.Language<SiblingNode<ID>> | undefined;
  subtitleLanguageLiteral: string | undefined;
  titleEIDR: string | undefined;
  titleEIDRTerm: RDF.NamedNode | undefined;
  trailer: Schema.VideoObject<SiblingNode<ID>> | undefined;
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
