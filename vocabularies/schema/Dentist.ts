import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { LocalBusinessMixin } from './LocalBusiness';
import { MedicalOrganizationMixin } from './MedicalOrganization';

export interface Dentist extends Schema.LocalBusiness, Schema.MedicalOrganization, RdfResource {
}

export function DentistMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DentistClass extends MedicalOrganizationMixin(LocalBusinessMixin(Resource)) implements Dentist {
  }
  return DentistClass
}

class DentistImpl extends DentistMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Dentist>) {
    super(arg, init)
    this.types.add(schema.Dentist)
  }

  static readonly __mixins: Mixin[] = [DentistMixin, LocalBusinessMixin, MedicalOrganizationMixin];
}
DentistMixin.appliesTo = schema.Dentist
DentistMixin.Class = DentistImpl
