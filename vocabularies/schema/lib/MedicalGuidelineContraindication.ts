import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalGuidelineMixin } from './MedicalGuideline.js';

export interface MedicalGuidelineContraindication<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalGuideline<D>, rdfine.RdfResource<D> {
}

export function MedicalGuidelineContraindicationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<MedicalGuidelineContraindication & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MedicalGuidelineContraindicationClass extends MedicalGuidelineMixin(Resource) {
  }
  return MedicalGuidelineContraindicationClass as any
}

class MedicalGuidelineContraindicationImpl extends MedicalGuidelineContraindicationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MedicalGuidelineContraindication>) {
    super(arg, init)
    this.types.add(schema.MedicalGuidelineContraindication)
  }

  static readonly __mixins: Mixin[] = [MedicalGuidelineContraindicationMixin, MedicalGuidelineMixin];
}
MedicalGuidelineContraindicationMixin.appliesTo = schema.MedicalGuidelineContraindication
MedicalGuidelineContraindicationMixin.Class = MedicalGuidelineContraindicationImpl

export const fromPointer = createFactory<MedicalGuidelineContraindication>([MedicalGuidelineMixin, MedicalGuidelineContraindicationMixin], { types: [schema.MedicalGuidelineContraindication] });
