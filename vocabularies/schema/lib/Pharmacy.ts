import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalOrganizationMixin } from './MedicalOrganization.js';

export interface Pharmacy<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalOrganization<D>, rdfine.RdfResource<D> {
}

export function PharmacyMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Pharmacy & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class PharmacyClass extends MedicalOrganizationMixin(Resource) {
  }
  return PharmacyClass as any
}

class PharmacyImpl extends PharmacyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Pharmacy>) {
    super(arg, init)
    this.types.add(schema.Pharmacy)
  }

  static readonly __mixins: Mixin[] = [PharmacyMixin, MedicalOrganizationMixin];
}
PharmacyMixin.appliesTo = schema.Pharmacy
PharmacyMixin.Class = PharmacyImpl

export const fromPointer = createFactory<Pharmacy>([MedicalOrganizationMixin, PharmacyMixin], { types: [schema.Pharmacy] });
