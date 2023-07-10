import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { EducationalOrganizationMixin } from './EducationalOrganization.js';

export interface ElementarySchool<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.EducationalOrganization<D>, rdfine.RdfResource<D> {
}

export function ElementarySchoolMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ElementarySchool & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ElementarySchoolClass extends EducationalOrganizationMixin(Resource) {
  }
  return ElementarySchoolClass as any
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

export const fromPointer = createFactory<ElementarySchool>([EducationalOrganizationMixin, ElementarySchoolMixin], { types: [schema.ElementarySchool] });
