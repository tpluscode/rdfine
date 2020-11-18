import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CivicStructureMixin } from './CivicStructure';
import { OrganizationMixin } from './Organization';

export interface EducationalOrganization<ID extends ResourceNode = ResourceNode> extends Schema.CivicStructure<ID>, Schema.Organization<ID>, RdfResource<ID> {
  alumni: Schema.Person<SiblingNode<ID>> | undefined;
}

export function EducationalOrganizationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class EducationalOrganizationClass extends OrganizationMixin(CivicStructureMixin(Resource)) implements EducationalOrganization {
    @property.resource()
    alumni: Schema.Person | undefined;
  }
  return EducationalOrganizationClass
}

class EducationalOrganizationImpl extends EducationalOrganizationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<EducationalOrganization>) {
    super(arg, init)
    this.types.add(schema.EducationalOrganization)
  }

  static readonly __mixins: Mixin[] = [EducationalOrganizationMixin, CivicStructureMixin, OrganizationMixin];
}
EducationalOrganizationMixin.appliesTo = schema.EducationalOrganization
EducationalOrganizationMixin.Class = EducationalOrganizationImpl
