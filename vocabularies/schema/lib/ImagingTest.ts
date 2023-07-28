import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalTestMixin } from './MedicalTest.js';

export interface ImagingTest<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalTest<D>, rdfine.RdfResource<D> {
  imagingTechnique: Schema.MedicalImagingTechnique | undefined;
}

export function ImagingTestMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ImagingTest & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ImagingTestClass extends MedicalTestMixin(Resource) {
    @rdfine.property()
    imagingTechnique: Schema.MedicalImagingTechnique | undefined;
  }
  return ImagingTestClass as any
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
