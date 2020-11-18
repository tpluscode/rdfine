import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalTestMixin } from './MedicalTest';

export interface BloodTest<ID extends ResourceNode = ResourceNode> extends Schema.MedicalTest<ID>, RdfResource<ID> {
}

export function BloodTestMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BloodTestClass extends MedicalTestMixin(Resource) implements BloodTest {
  }
  return BloodTestClass
}

class BloodTestImpl extends BloodTestMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BloodTest>) {
    super(arg, init)
    this.types.add(schema.BloodTest)
  }

  static readonly __mixins: Mixin[] = [BloodTestMixin, MedicalTestMixin];
}
BloodTestMixin.appliesTo = schema.BloodTest
BloodTestMixin.Class = BloodTestImpl
