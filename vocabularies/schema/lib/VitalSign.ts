import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalSignMixin } from './MedicalSign.js';

export interface VitalSign<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalSign<D>, rdfine.RdfResource<D> {
}

export function VitalSignMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<VitalSign & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class VitalSignClass extends MedicalSignMixin(Resource) {
  }
  return VitalSignClass as any
}

class VitalSignImpl extends VitalSignMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<VitalSign>) {
    super(arg, init)
    this.types.add(schema.VitalSign)
  }

  static readonly __mixins: Mixin[] = [VitalSignMixin, MedicalSignMixin];
}
VitalSignMixin.appliesTo = schema.VitalSign
VitalSignMixin.Class = VitalSignImpl

export const fromPointer = createFactory<VitalSign>([MedicalSignMixin, VitalSignMixin], { types: [schema.VitalSign] });
