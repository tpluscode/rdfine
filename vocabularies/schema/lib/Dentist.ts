import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { LocalBusinessMixin } from './LocalBusiness.js';
import { MedicalOrganizationMixin } from './MedicalOrganization.js';

export interface Dentist<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, Schema.MedicalOrganization<D>, RdfResource<D> {
}

export function DentistMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Dentist> & RdfResourceCore> & Base {
  @namespace(schema)
  class DentistClass extends MedicalOrganizationMixin(LocalBusinessMixin(Resource)) implements Partial<Dentist> {
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

export const fromPointer = createFactory<Dentist>([MedicalOrganizationMixin, LocalBusinessMixin, DentistMixin], { types: [schema.Dentist] });
