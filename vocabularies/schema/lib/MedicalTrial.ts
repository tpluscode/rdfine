import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalStudyMixin } from './MedicalStudy';

export interface MedicalTrial<ID extends ResourceNode = ResourceNode> extends Schema.MedicalStudy<ID>, RdfResource<ID> {
  trialDesign: Schema.MedicalTrialDesign | undefined;
}

export function MedicalTrialMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MedicalTrialClass extends MedicalStudyMixin(Resource) implements MedicalTrial {
    @property()
    trialDesign: Schema.MedicalTrialDesign | undefined;
  }
  return MedicalTrialClass
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
