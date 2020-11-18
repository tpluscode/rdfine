import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CategoryCodeMixin } from './CategoryCode';
import { MedicalIntangibleMixin } from './MedicalIntangible';

export interface MedicalCode<ID extends ResourceNode = ResourceNode> extends Schema.CategoryCode<ID>, Schema.MedicalIntangible<ID>, RdfResource<ID> {
  codeValue: string | undefined;
  codingSystem: string | undefined;
}

export function MedicalCodeMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MedicalCodeClass extends MedicalIntangibleMixin(CategoryCodeMixin(Resource)) implements MedicalCode {
    @property.literal()
    codeValue: string | undefined;
    @property.literal()
    codingSystem: string | undefined;
  }
  return MedicalCodeClass
}

class MedicalCodeImpl extends MedicalCodeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MedicalCode>) {
    super(arg, init)
    this.types.add(schema.MedicalCode)
  }

  static readonly __mixins: Mixin[] = [MedicalCodeMixin, CategoryCodeMixin, MedicalIntangibleMixin];
}
MedicalCodeMixin.appliesTo = schema.MedicalCode
MedicalCodeMixin.Class = MedicalCodeImpl
