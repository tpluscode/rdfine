import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import SportsActivityLocationMixin from './SportsActivityLocation';

export interface TennisComplex extends Schema.SportsActivityLocation, RdfResource {
}

export default function TennisComplexMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TennisComplexClass extends SportsActivityLocationMixin(Resource) implements TennisComplex {
  }
  return TennisComplexClass
}

class TennisComplexImpl extends TennisComplexMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.TennisComplex)
  }
}
TennisComplexMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TennisComplex)
TennisComplexMixin.Class = TennisComplexImpl
