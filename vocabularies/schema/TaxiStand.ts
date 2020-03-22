import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CivicStructureMixin from './CivicStructure';

export interface TaxiStand extends Schema.CivicStructure, RdfResource {
}

export default function TaxiStandMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TaxiStandClass extends CivicStructureMixin(Resource) implements TaxiStand {
  }
  return TaxiStandClass
}

class TaxiStandImpl extends TaxiStandMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.TaxiStand)
  }
}
TaxiStandMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TaxiStand)
TaxiStandMixin.Class = TaxiStandImpl
