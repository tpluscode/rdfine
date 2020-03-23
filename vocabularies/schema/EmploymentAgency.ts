import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import LocalBusinessMixin from './LocalBusiness';

export interface EmploymentAgency extends Schema.LocalBusiness, RdfResource {
}

export default function EmploymentAgencyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class EmploymentAgencyClass extends LocalBusinessMixin(Resource) implements EmploymentAgency {
  }
  return EmploymentAgencyClass
}

class EmploymentAgencyImpl extends EmploymentAgencyMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.EmploymentAgency)
  }
}
EmploymentAgencyMixin.shouldApply = (r: RdfResource) => r.types.has(schema.EmploymentAgency)
EmploymentAgencyMixin.Class = EmploymentAgencyImpl
