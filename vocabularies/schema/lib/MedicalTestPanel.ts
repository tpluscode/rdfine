import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalTestMixin } from './MedicalTest.js';

export interface MedicalTestPanel<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalTest<D>, rdfine.RdfResource<D> {
  subTest: Schema.MedicalTest<D> | undefined;
}

export function MedicalTestPanelMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<MedicalTestPanel & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MedicalTestPanelClass extends MedicalTestMixin(Resource) {
    @rdfine.property.resource()
    subTest: Schema.MedicalTest | undefined;
  }
  return MedicalTestPanelClass as any
}

class MedicalTestPanelImpl extends MedicalTestPanelMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MedicalTestPanel>) {
    super(arg, init)
    this.types.add(schema.MedicalTestPanel)
  }

  static readonly __mixins: Mixin[] = [MedicalTestPanelMixin, MedicalTestMixin];
}
MedicalTestPanelMixin.appliesTo = schema.MedicalTestPanel
MedicalTestPanelMixin.Class = MedicalTestPanelImpl

export const fromPointer = createFactory<MedicalTestPanel>([MedicalTestMixin, MedicalTestPanelMixin], { types: [schema.MedicalTestPanel] });
