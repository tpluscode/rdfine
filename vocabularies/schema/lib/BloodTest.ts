import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalTestMixin } from './MedicalTest.js';

export interface BloodTest<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalTest<D>, rdfine.RdfResource<D> {
}

export function BloodTestMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<BloodTest> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class BloodTestClass extends MedicalTestMixin(Resource) implements Partial<BloodTest> {
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

export const fromPointer = createFactory<BloodTest>([MedicalTestMixin, BloodTestMixin], { types: [schema.BloodTest] });
