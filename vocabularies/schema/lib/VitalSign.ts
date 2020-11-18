import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalSignMixin } from './MedicalSign';

export interface VitalSign<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalSign<D>, RdfResource<D> {
}

export function VitalSignMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class VitalSignClass extends MedicalSignMixin(Resource) implements VitalSign {
  }
  return VitalSignClass
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
