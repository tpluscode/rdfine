import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Pharmacy)
  }
}
PharmacyMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Pharmacy)
PharmacyMixin.Class = PharmacyImpl
