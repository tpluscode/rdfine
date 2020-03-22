import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import EducationalOrganizationMixin from './EducationalOrganization';

export interface CollegeOrUniversity extends Schema.EducationalOrganization, RdfResource {
}

export default function CollegeOrUniversityMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CollegeOrUniversityClass extends EducationalOrganizationMixin(Resource) implements CollegeOrUniversity {
  }
  return CollegeOrUniversityClass
}

class CollegeOrUniversityImpl extends CollegeOrUniversityMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.CollegeOrUniversity)
  }
}
CollegeOrUniversityMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CollegeOrUniversity)
CollegeOrUniversityMixin.Class = CollegeOrUniversityImpl
