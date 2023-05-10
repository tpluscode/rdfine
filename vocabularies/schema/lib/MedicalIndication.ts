import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalEntityMixin } from './MedicalEntity.js';

export interface MedicalIndication<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalEntity<D>, rdfine.RdfResource<D> {
}

export function MedicalIndicationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<MedicalIndication> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MedicalIndicationClass extends MedicalEntityMixin(Resource) implements Partial<MedicalIndication> {
  }
  return MedicalIndicationClass
}

class MedicalIndicationImpl extends MedicalIndicationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MedicalIndication>) {
    super(arg, init)
    this.types.add(schema.MedicalIndication)
  }

  static readonly __mixins: Mixin[] = [MedicalIndicationMixin, MedicalEntityMixin];
}
MedicalIndicationMixin.appliesTo = schema.MedicalIndication
MedicalIndicationMixin.Class = MedicalIndicationImpl

export const fromPointer = createFactory<MedicalIndication>([MedicalEntityMixin, MedicalIndicationMixin], { types: [schema.MedicalIndication] });
