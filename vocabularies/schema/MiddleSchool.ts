import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import EducationalOrganizationMixin from './EducationalOrganization';

export interface MiddleSchool extends Schema.EducationalOrganization, RdfResource {
}

export default function MiddleSchoolMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MiddleSchoolClass extends EducationalOrganizationMixin(Resource) implements MiddleSchool {
  }
  return MiddleSchoolClass
}

class MiddleSchoolImpl extends MiddleSchoolMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.MiddleSchool)
  }
}
MiddleSchoolMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MiddleSchool)
MiddleSchoolMixin.Class = MiddleSchoolImpl
