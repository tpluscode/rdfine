import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { CivicStructureMixin } from './CivicStructure';
import { EntertainmentBusinessMixin } from './EntertainmentBusiness';

export interface MovieTheater extends Schema.CivicStructure, Schema.EntertainmentBusiness, RdfResource {
  screenCount: number;
}

export function MovieTheaterMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MovieTheaterClass extends EntertainmentBusinessMixin(CivicStructureMixin(Resource)) implements MovieTheater {
    @property.literal({ type: Number })
    screenCount!: number;
  }
  return MovieTheaterClass
}

class MovieTheaterImpl extends MovieTheaterMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MovieTheater>) {
    super(arg, init)
    this.types.add(schema.MovieTheater)
  }
}
MovieTheaterMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MovieTheater)
MovieTheaterMixin.Class = MovieTheaterImpl
