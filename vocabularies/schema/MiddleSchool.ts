import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { EducationalOrganizationMixin } from './EducationalOrganization';

export interface MiddleSchool extends Schema.EducationalOrganization, RdfResource {
}

export function MiddleSchoolMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MiddleSchoolClass extends EducationalOrganizationMixin(Resource) implements MiddleSchool {
  }
  return MiddleSchoolClass
}

class MiddleSchoolImpl extends MiddleSchoolMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MiddleSchool>) {
    super(arg, init)
    this.types.add(schema.MiddleSchool)
  }
}
MiddleSchoolMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MiddleSchool)
MiddleSchoolMixin.Class = MiddleSchoolImpl
