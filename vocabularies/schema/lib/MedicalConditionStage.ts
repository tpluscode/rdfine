import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalIntangibleMixin } from './MedicalIntangible.js';

export interface MedicalConditionStage<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalIntangible<D>, rdfine.RdfResource<D> {
  stageAsNumber: number | undefined;
  subStageSuffix: string | undefined;
}

export function MedicalConditionStageMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<MedicalConditionStage & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MedicalConditionStageClass extends MedicalIntangibleMixin(Resource) {
    @rdfine.property.literal({ type: Number })
    stageAsNumber: number | undefined;
    @rdfine.property.literal()
    subStageSuffix: string | undefined;
  }
  return MedicalConditionStageClass as any
}

class MedicalConditionStageImpl extends MedicalConditionStageMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MedicalConditionStage>) {
    super(arg, init)
    this.types.add(schema.MedicalConditionStage)
  }

  static readonly __mixins: Mixin[] = [MedicalConditionStageMixin, MedicalIntangibleMixin];
}
MedicalConditionStageMixin.appliesTo = schema.MedicalConditionStage
MedicalConditionStageMixin.Class = MedicalConditionStageImpl

export const fromPointer = createFactory<MedicalConditionStage>([MedicalIntangibleMixin, MedicalConditionStageMixin], { types: [schema.MedicalConditionStage] });
