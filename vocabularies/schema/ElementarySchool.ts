import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import EducationalOrganizationMixin from './EducationalOrganization';

export interface ElementarySchool extends Schema.EducationalOrganization, RdfResource {
}

export default function ElementarySchoolMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ElementarySchoolClass extends EducationalOrganizationMixin(Resource) implements ElementarySchool {
  }
  return ElementarySchoolClass
}

class ElementarySchoolImpl extends ElementarySchoolMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<ElementarySchool>) {
    super(arg)
    this.types.add(schema.ElementarySchool)
    initializeProperties(this, init)
  }
}
ElementarySchoolMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ElementarySchool)
ElementarySchoolMixin.Class = ElementarySchoolImpl
