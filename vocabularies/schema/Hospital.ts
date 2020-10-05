import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CivicStructureMixin } from './CivicStructure';
import { EmergencyServiceMixin } from './EmergencyService';
import { MedicalOrganizationMixin } from './MedicalOrganization';

export interface Hospital<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, Schema.EmergencyService<D>, Schema.MedicalOrganization<D>, RdfResource<D> {
}

export function HospitalMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HospitalClass extends MedicalOrganizationMixin(EmergencyServiceMixin(CivicStructureMixin(Resource))) implements Hospital {
  }
  return HospitalClass
}

class HospitalImpl extends HospitalMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Hospital>) {
    super(arg, init)
    this.types.add(schema.Hospital)
  }

  static readonly __mixins: Mixin[] = [HospitalMixin, CivicStructureMixin, EmergencyServiceMixin, MedicalOrganizationMixin];
}
HospitalMixin.appliesTo = schema.Hospital
HospitalMixin.Class = HospitalImpl
