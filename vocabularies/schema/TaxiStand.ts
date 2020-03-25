import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<TaxiStand>) {
    super(arg)
    this.types.add(schema.TaxiStand)
    initializeProperties<TaxiStand>(this, init)
  }
}
TaxiStandMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TaxiStand)
TaxiStandMixin.Class = TaxiStandImpl
