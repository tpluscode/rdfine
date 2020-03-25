import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CivicStructureMixin from './CivicStructure';
import EntertainmentBusinessMixin from './EntertainmentBusiness';

export interface MovieTheater extends Schema.CivicStructure, Schema.EntertainmentBusiness, RdfResource {
  screenCount: number;
}

export default function MovieTheaterMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MovieTheaterClass extends EntertainmentBusinessMixin(CivicStructureMixin(Resource)) implements MovieTheater {
    @property.literal({ type: Number })
    screenCount!: number;
  }
  return MovieTheaterClass
}

class MovieTheaterImpl extends MovieTheaterMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<MovieTheater>) {
    super(arg)
    this.types.add(schema.MovieTheater)
    initializeProperties<MovieTheater>(this, init)
  }
}
MovieTheaterMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MovieTheater)
MovieTheaterMixin.Class = MovieTheaterImpl
