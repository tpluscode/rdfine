import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import ResidenceMixin from './Residence';

export interface ApartmentComplex extends Schema.Residence, RdfResource {
  petsAllowed: boolean | string;
}

export default function ApartmentComplexMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ApartmentComplexClass extends ResidenceMixin(Resource) implements ApartmentComplex {
    @property.literal()
    petsAllowed!: boolean | string;
  }
  return ApartmentComplexClass
}

class ApartmentComplexImpl extends ApartmentComplexMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ApartmentComplex>) {
    super(arg, init)
    this.types.add(schema.ApartmentComplex)
  }
}
ApartmentComplexMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ApartmentComplex)
ApartmentComplexMixin.Class = ApartmentComplexImpl
