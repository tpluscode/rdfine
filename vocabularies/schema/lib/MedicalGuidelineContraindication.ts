import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalGuidelineMixin } from './MedicalGuideline';

export interface MedicalGuidelineContraindication<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalGuideline<D>, RdfResource<D> {
}

export function MedicalGuidelineContraindicationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MedicalGuidelineContraindication> & RdfResourceCore> & Base {
  @namespace(schema)
  class MedicalGuidelineContraindicationClass extends MedicalGuidelineMixin(Resource) implements Partial<MedicalGuidelineContraindication> {
  }
  return MedicalGuidelineContraindicationClass
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
