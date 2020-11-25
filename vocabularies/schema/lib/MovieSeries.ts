import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkSeriesMixin } from './CreativeWorkSeries';

export interface MovieSeries<ID extends ResourceNode = ResourceNode> extends Schema.CreativeWorkSeries<ID>, RdfResource<ID> {
  actor: Schema.Person<SiblingNode<ID>> | undefined;
  actors: Schema.Person<SiblingNode<ID>> | undefined;
  director: Schema.Person<SiblingNode<ID>> | undefined;
  directors: Schema.Person<SiblingNode<ID>> | undefined;
  musicBy: Schema.MusicGroup<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  productionCompany: Schema.Organization<SiblingNode<ID>> | undefined;
  trailer: Schema.VideoObject<SiblingNode<ID>> | undefined;
}

export function MovieSeriesMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MovieSeriesClass extends CreativeWorkSeriesMixin(Resource) implements MovieSeries {
    @property.resource()
    actor: Schema.Person | undefined;
    @property.resource()
    actors: Schema.Person | undefined;
    @property.resource()
    director: Schema.Person | undefined;
    @property.resource()
    directors: Schema.Person | undefined;
    @property.resource()
    musicBy: Schema.MusicGroup | Schema.Person | undefined;
    @property.resource()
    productionCompany: Schema.Organization | undefined;
    @property.resource()
    trailer: Schema.VideoObject | undefined;
  }
  return MovieSeriesClass
}

class MovieSeriesImpl extends MovieSeriesMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MovieSeries>) {
    super(arg, init)
    this.types.add(schema.MovieSeries)
  }

  static readonly __mixins: Mixin[] = [MovieSeriesMixin, CreativeWorkSeriesMixin];
}
MovieSeriesMixin.appliesTo = schema.MovieSeries
MovieSeriesMixin.Class = MovieSeriesImpl
