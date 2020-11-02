import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { MedicalIntangibleMixin } from './MedicalIntangible';

export interface MedicalConditionStage<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalIntangible<D>, RdfResource<D> {
  stageAsNumber: number | undefined;
  subStageSuffix: string | undefined;
}

export function MedicalConditionStageMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MedicalConditionStageClass extends MedicalIntangibleMixin(Resource) implements MedicalConditionStage {
    @property.literal({ type: Number })
    stageAsNumber: number | undefined;
    @property.literal()
    subStageSuffix: string | undefined;
  }
  return MedicalConditionStageClass
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
