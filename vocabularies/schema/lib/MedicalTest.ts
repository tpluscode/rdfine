import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalEntityMixin } from './MedicalEntity';

export interface MedicalTest<ID extends ResourceNode = ResourceNode> extends Schema.MedicalEntity<ID>, RdfResource<ID> {
  affectedBy: Schema.Drug<SiblingNode<ID>> | undefined;
  normalRange: string | undefined;
  normalRangeTerm: Schema.MedicalEnumeration | undefined;
  signDetected: Schema.MedicalSign<SiblingNode<ID>> | undefined;
  usedToDiagnose: Schema.MedicalCondition<SiblingNode<ID>> | undefined;
  usesDevice: Schema.MedicalDevice<SiblingNode<ID>> | undefined;
}

export function MedicalTestMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MedicalTestClass extends MedicalEntityMixin(Resource) implements MedicalTest {
    @property.resource()
    affectedBy: Schema.Drug | undefined;
    @property.literal()
    normalRange: string | undefined;
    @property({ path: schema.normalRange })
    normalRangeTerm: Schema.MedicalEnumeration | undefined;
    @property.resource()
    signDetected: Schema.MedicalSign | undefined;
    @property.resource()
    usedToDiagnose: Schema.MedicalCondition | undefined;
    @property.resource()
    usesDevice: Schema.MedicalDevice | undefined;
  }
  return MedicalTestClass
}

class MedicalTestImpl extends MedicalTestMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MedicalTest>) {
    super(arg, init)
    this.types.add(schema.MedicalTest)
  }

  static readonly __mixins: Mixin[] = [MedicalTestMixin, MedicalEntityMixin];
}
MedicalTestMixin.appliesTo = schema.MedicalTest
MedicalTestMixin.Class = MedicalTestImpl
