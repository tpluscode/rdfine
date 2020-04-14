import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<CollegeOrUniversity>) {
    super(arg, init)
    this.types.add(schema.CollegeOrUniversity)
  }
}
CollegeOrUniversityMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CollegeOrUniversity)
CollegeOrUniversityMixin.Class = CollegeOrUniversityImpl
