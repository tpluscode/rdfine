import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<TennisComplex>) {
    super(arg)
    this.types.add(schema.TennisComplex)
    initializeProperties(this, init)
  }
}
TennisComplexMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TennisComplex)
TennisComplexMixin.Class = TennisComplexImpl
