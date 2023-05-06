import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CategoryCodeMixin } from './CategoryCode.js';
import { MedicalIntangibleMixin } from './MedicalIntangible.js';

export interface MedicalCode<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CategoryCode<D>, Schema.MedicalIntangible<D>, RdfResource<D> {
  codeValue: string | undefined;
  codingSystem: string | undefined;
}

export function MedicalCodeMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MedicalCode> & RdfResourceCore> & Base {
  @namespace(schema)
  class MedicalCodeClass extends MedicalIntangibleMixin(CategoryCodeMixin(Resource)) implements Partial<MedicalCode> {
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

export const fromPointer = createFactory<MedicalCode>([MedicalIntangibleMixin, CategoryCodeMixin, MedicalCodeMixin], { types: [schema.MedicalCode] });
