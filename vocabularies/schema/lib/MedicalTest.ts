import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalEntityMixin } from './MedicalEntity.js';

export interface MedicalTest<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalEntity<D>, RdfResource<D> {
  affectedBy: Schema.Drug<D> | undefined;
  normalRange: string | undefined;
  normalRangeTerm: Schema.MedicalEnumeration | undefined;
  signDetected: Schema.MedicalSign<D> | undefined;
  usedToDiagnose: Schema.MedicalCondition<D> | undefined;
  usesDevice: Schema.MedicalDevice<D> | undefined;
}

export function MedicalTestMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MedicalTest> & RdfResourceCore> & Base {
  @namespace(schema)
  class MedicalTestClass extends MedicalEntityMixin(Resource) implements Partial<MedicalTest> {
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

export const fromPointer = createFactory<MedicalTest>([MedicalEntityMixin, MedicalTestMixin], { types: [schema.MedicalTest] });
