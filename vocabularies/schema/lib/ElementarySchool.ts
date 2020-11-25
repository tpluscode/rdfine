import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { EducationalOrganizationMixin } from './EducationalOrganization';

export interface ElementarySchool<ID extends ResourceNode = ResourceNode> extends Schema.EducationalOrganization<ID>, RdfResource<ID> {
}

export function ElementarySchoolMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ElementarySchoolClass extends EducationalOrganizationMixin(Resource) implements ElementarySchool {
  }
  return ElementarySchoolClass
}

class ElementarySchoolImpl extends ElementarySchoolMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ElementarySchool>) {
    super(arg, init)
    this.types.add(schema.ElementarySchool)
  }

  static readonly __mixins: Mixin[] = [ElementarySchoolMixin, EducationalOrganizationMixin];
}
ElementarySchoolMixin.appliesTo = schema.ElementarySchool
ElementarySchoolMixin.Class = ElementarySchoolImpl
