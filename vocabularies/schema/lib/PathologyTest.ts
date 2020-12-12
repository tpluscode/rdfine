import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalTestMixin } from './MedicalTest';

export interface PathologyTest<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalTest<D>, RdfResource<D> {
  tissueSample: string | undefined;
}

export function PathologyTestMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<PathologyTest> & RdfResourceCore> & Base {
  @namespace(schema)
  class PathologyTestClass extends MedicalTestMixin(Resource) implements Partial<PathologyTest> {
    @property.literal()
    tissueSample: string | undefined;
  }
  return PathologyTestClass
}

class PathologyTestImpl extends PathologyTestMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PathologyTest>) {
    super(arg, init)
    this.types.add(schema.PathologyTest)
  }

  static readonly __mixins: Mixin[] = [PathologyTestMixin, MedicalTestMixin];
}
PathologyTestMixin.appliesTo = schema.PathologyTest
PathologyTestMixin.Class = PathologyTestImpl

export const fromPointer = createFactory<PathologyTest>([MedicalTestMixin, PathologyTestMixin], { types: [schema.PathologyTest] });
