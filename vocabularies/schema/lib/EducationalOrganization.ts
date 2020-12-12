import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CivicStructureMixin } from './CivicStructure';
import { OrganizationMixin } from './Organization';

export interface EducationalOrganization<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, Schema.Organization<D>, RdfResource<D> {
  alumni: Schema.Person<D> | undefined;
}

export function EducationalOrganizationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<EducationalOrganization> & RdfResourceCore> & Base {
  @namespace(schema)
  class EducationalOrganizationClass extends OrganizationMixin(CivicStructureMixin(Resource)) implements Partial<EducationalOrganization> {
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

export const fromPointer = createFactory<EducationalOrganization>([OrganizationMixin, CivicStructureMixin, EducationalOrganizationMixin], { types: [schema.EducationalOrganization] });
