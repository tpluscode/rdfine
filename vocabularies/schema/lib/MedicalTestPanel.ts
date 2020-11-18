import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalTestMixin } from './MedicalTest';

export interface MedicalTestPanel<ID extends ResourceNode = ResourceNode> extends Schema.MedicalTest<ID>, RdfResource<ID> {
  subTest: Schema.MedicalTest<SiblingNode<ID>> | undefined;
}

export function MedicalTestPanelMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MedicalTestPanelClass extends MedicalTestMixin(Resource) implements MedicalTestPanel {
    @property.resource()
    subTest: Schema.MedicalTest | undefined;
  }
  return MedicalTestPanelClass
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
