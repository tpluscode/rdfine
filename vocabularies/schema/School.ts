import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { EducationalOrganizationMixin } from './EducationalOrganization';

export interface School extends Schema.EducationalOrganization, RdfResource {
}

export function SchoolMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SchoolClass extends EducationalOrganizationMixin(Resource) implements School {
  }
  return SchoolClass
}

class SchoolImpl extends SchoolMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<School>) {
    super(arg, init)
    this.types.add(schema.School)
  }
}
SchoolMixin.shouldApply = (r: RdfResource) => r.types.has(schema.School)
SchoolMixin.Class = SchoolImpl
