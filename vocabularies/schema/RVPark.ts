import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CivicStructureMixin from './CivicStructure';

export interface RVPark extends Schema.CivicStructure, RdfResource {
}

export default function RVParkMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RVParkClass extends CivicStructureMixin(Resource) implements RVPark {
  }
  return RVParkClass
}

class RVParkImpl extends RVParkMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.RVPark)
  }
}
RVParkMixin.shouldApply = (r: RdfResource) => r.types.has(schema.RVPark)
RVParkMixin.Class = RVParkImpl
