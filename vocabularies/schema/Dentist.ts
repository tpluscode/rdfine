import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import LocalBusinessMixin from './LocalBusiness';
import MedicalOrganizationMixin from './MedicalOrganization';

export interface Dentist extends Schema.LocalBusiness, Schema.MedicalOrganization, RdfResource {
}

export default function DentistMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DentistClass extends MedicalOrganizationMixin(LocalBusinessMixin(Resource)) implements Dentist {
  }
  return DentistClass
}

class DentistImpl extends DentistMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Dentist)
  }
}
DentistMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Dentist)
DentistMixin.Class = DentistImpl
