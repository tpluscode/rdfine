import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { EducationalOrganizationMixin } from './EducationalOrganization.js';

export interface MiddleSchool<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.EducationalOrganization<D>, rdfine.RdfResource<D> {
}

export function MiddleSchoolMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<MiddleSchool & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MiddleSchoolClass extends EducationalOrganizationMixin(Resource) {
  }
  return MiddleSchoolClass as any
}

class MiddleSchoolImpl extends MiddleSchoolMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MiddleSchool>) {
    super(arg, init)
    this.types.add(schema.MiddleSchool)
  }

  static readonly __mixins: Mixin[] = [MiddleSchoolMixin, EducationalOrganizationMixin];
}
MiddleSchoolMixin.appliesTo = schema.MiddleSchool
MiddleSchoolMixin.Class = MiddleSchoolImpl

export const fromPointer = createFactory<MiddleSchool>([EducationalOrganizationMixin, MiddleSchoolMixin], { types: [schema.MiddleSchool] });
