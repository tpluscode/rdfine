import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CivicStructureMixin } from './CivicStructure';
import { EntertainmentBusinessMixin } from './EntertainmentBusiness';

export interface MovieTheater<ID extends ResourceNode = ResourceNode> extends Schema.CivicStructure<ID>, Schema.EntertainmentBusiness<ID>, RdfResource<ID> {
  screenCount: number | undefined;
}

export function MovieTheaterMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MovieTheaterClass extends EntertainmentBusinessMixin(CivicStructureMixin(Resource)) implements MovieTheater {
    @property.literal({ type: Number })
    screenCount: number | undefined;
  }
  return MovieTheaterClass
}

class MovieTheaterImpl extends MovieTheaterMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MovieTheater>) {
    super(arg, init)
    this.types.add(schema.MovieTheater)
  }

  static readonly __mixins: Mixin[] = [MovieTheaterMixin, CivicStructureMixin, EntertainmentBusinessMixin];
}
MovieTheaterMixin.appliesTo = schema.MovieTheater
MovieTheaterMixin.Class = MovieTheaterImpl
