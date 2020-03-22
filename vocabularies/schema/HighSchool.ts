import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import EducationalOrganizationMixin from './EducationalOrganization';

export interface HighSchool extends Schema.EducationalOrganization, RdfResource {
}

export default function HighSchoolMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HighSchoolClass extends EducationalOrganizationMixin(Resource) implements HighSchool {
  }
  return HighSchoolClass
}

class HighSchoolImpl extends HighSchoolMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.HighSchool)
  }
}
HighSchoolMixin.shouldApply = (r: RdfResource) => r.types.has(schema.HighSchool)
HighSchoolMixin.Class = HighSchoolImpl
