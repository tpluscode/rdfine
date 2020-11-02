import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { MedicalTestMixin } from './MedicalTest';

export interface PathologyTest<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalTest<D>, RdfResource<D> {
  tissueSample: string | undefined;
}

export function PathologyTestMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PathologyTestClass extends MedicalTestMixin(Resource) implements PathologyTest {
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
