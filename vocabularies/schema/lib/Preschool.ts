import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { EducationalOrganizationMixin } from './EducationalOrganization';

export interface Preschool<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.EducationalOrganization<D>, RdfResource<D> {
}

export function PreschoolMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PreschoolClass extends EducationalOrganizationMixin(Resource) implements Preschool {
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
