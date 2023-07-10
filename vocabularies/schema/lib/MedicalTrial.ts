import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalStudyMixin } from './MedicalStudy.js';

export interface MedicalTrial<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalStudy<D>, rdfine.RdfResource<D> {
  trialDesign: Schema.MedicalTrialDesign | undefined;
}

export function MedicalTrialMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<MedicalTrial & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MedicalTrialClass extends MedicalStudyMixin(Resource) {
    @rdfine.property()
    trialDesign: Schema.MedicalTrialDesign | undefined;
  }
  return MedicalTrialClass as any
}

class MedicalTrialImpl extends MedicalTrialMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MedicalTrial>) {
    super(arg, init)
    this.types.add(schema.MedicalTrial)
  }

  static readonly __mixins: Mixin[] = [MedicalTrialMixin, MedicalStudyMixin];
}
MedicalTrialMixin.appliesTo = schema.MedicalTrial
MedicalTrialMixin.Class = MedicalTrialImpl

export const fromPointer = createFactory<MedicalTrial>([MedicalStudyMixin, MedicalTrialMixin], { types: [schema.MedicalTrial] });
