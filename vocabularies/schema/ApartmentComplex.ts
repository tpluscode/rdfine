import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ResidenceMixin } from './Residence';

export interface ApartmentComplex extends Schema.Residence, RdfResource {
  petsAllowed: boolean | string | undefined;
}

export function ApartmentComplexMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ApartmentComplexClass extends ResidenceMixin(Resource) implements ApartmentComplex {
    @property.literal()
    petsAllowed: boolean | string | undefined;
  }
  return ApartmentComplexClass
}

class ApartmentComplexImpl extends ApartmentComplexMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ApartmentComplex>) {
    super(arg, init)
    this.types.add(schema.ApartmentComplex)
  }

  static readonly __mixins: Mixin[] = [ApartmentComplexMixin, ResidenceMixin];
}
ApartmentComplexMixin.appliesTo = schema.ApartmentComplex
ApartmentComplexMixin.Class = ApartmentComplexImpl
