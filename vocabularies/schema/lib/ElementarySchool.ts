import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { EducationalOrganizationMixin } from './EducationalOrganization';

export interface ElementarySchool<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.EducationalOrganization<D>, RdfResource<D> {
}

export function ElementarySchoolMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ElementarySchool> & RdfResourceCore> & Base {
  @namespace(schema)
  class ElementarySchoolClass extends EducationalOrganizationMixin(Resource) implements Partial<ElementarySchool> {
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

export const fromPointer = createFactory<ElementarySchool>([EducationalOrganizationMixin, ElementarySchoolMixin], { types: [schema.ElementarySchool] });
