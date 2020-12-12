import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalOrganizationMixin } from './MedicalOrganization';

export interface Pharmacy<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalOrganization<D>, RdfResource<D> {
}

export function PharmacyMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Pharmacy> & RdfResourceCore> & Base {
  @namespace(schema)
  class PharmacyClass extends MedicalOrganizationMixin(Resource) implements Partial<Pharmacy> {
  }
  return PharmacyClass
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
