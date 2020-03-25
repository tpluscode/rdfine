import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import MedicalOrganizationMixin from './MedicalOrganization';

export interface Pharmacy extends Schema.MedicalOrganization, RdfResource {
}

export default function PharmacyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PharmacyClass extends MedicalOrganizationMixin(Resource) implements Pharmacy {
  }
  return PharmacyClass
}

class PharmacyImpl extends PharmacyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Pharmacy>) {
    super(arg)
    this.types.add(schema.Pharmacy)
    initializeProperties<Pharmacy>(this, init)
  }
}
PharmacyMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Pharmacy)
PharmacyMixin.Class = PharmacyImpl
