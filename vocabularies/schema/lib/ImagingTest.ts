import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalTestMixin } from './MedicalTest';

export interface ImagingTest<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalTest<D>, RdfResource<D> {
  imagingTechnique: Schema.MedicalImagingTechnique | undefined;
}

export function ImagingTestMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ImagingTest> & RdfResourceCore> & Base {
  @namespace(schema)
  class ImagingTestClass extends MedicalTestMixin(Resource) implements Partial<ImagingTest> {
    @property()
    imagingTechnique: Schema.MedicalImagingTechnique | undefined;
  }
  return ImagingTestClass
}

class ImagingTestImpl extends ImagingTestMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ImagingTest>) {
    super(arg, init)
    this.types.add(schema.ImagingTest)
  }

  static readonly __mixins: Mixin[] = [ImagingTestMixin, MedicalTestMixin];
}
ImagingTestMixin.appliesTo = schema.ImagingTest
ImagingTestMixin.Class = ImagingTestImpl

export const fromPointer = createFactory<ImagingTest>([MedicalTestMixin, ImagingTestMixin], { types: [schema.ImagingTest] });
