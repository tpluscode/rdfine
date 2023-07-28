import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { EducationalOrganizationMixin } from './EducationalOrganization.js';

export interface School<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.EducationalOrganization<D>, rdfine.RdfResource<D> {
}

export function SchoolMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<School & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class SchoolClass extends EducationalOrganizationMixin(Resource) {
  }
  return SchoolClass as any
}

class SchoolImpl extends SchoolMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<School>) {
    super(arg, init)
    this.types.add(schema.School)
  }

  static readonly __mixins: Mixin[] = [SchoolMixin, EducationalOrganizationMixin];
}
SchoolMixin.appliesTo = schema.School
SchoolMixin.Class = SchoolImpl

export const fromPointer = createFactory<School>([EducationalOrganizationMixin, SchoolMixin], { types: [schema.School] });
