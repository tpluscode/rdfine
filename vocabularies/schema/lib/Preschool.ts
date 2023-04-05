import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { EducationalOrganizationMixin } from './EducationalOrganization.js';

export interface Preschool<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.EducationalOrganization<D>, RdfResource<D> {
}

export function PreschoolMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Preschool> & RdfResourceCore> & Base {
  @namespace(schema)
  class PreschoolClass extends EducationalOrganizationMixin(Resource) implements Partial<Preschool> {
  }
  return PreschoolClass
}

class PreschoolImpl extends PreschoolMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Preschool>) {
    super(arg, init)
    this.types.add(schema.Preschool)
  }

  static readonly __mixins: Mixin[] = [PreschoolMixin, EducationalOrganizationMixin];
}
PreschoolMixin.appliesTo = schema.Preschool
PreschoolMixin.Class = PreschoolImpl

export const fromPointer = createFactory<Preschool>([EducationalOrganizationMixin, PreschoolMixin], { types: [schema.Preschool] });
