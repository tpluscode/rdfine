import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ResidenceMixin } from './Residence';

export interface ApartmentComplex<ID extends ResourceNode = ResourceNode> extends Schema.Residence<ID>, RdfResource<ID> {
  numberOfAccommodationUnits: Schema.QuantitativeValue<SiblingNode<ID>> | undefined;
  numberOfAvailableAccommodationUnits: Schema.QuantitativeValue<SiblingNode<ID>> | undefined;
  numberOfBedrooms: Schema.QuantitativeValue<SiblingNode<ID>> | undefined;
  numberOfBedroomsLiteral: number | undefined;
  petsAllowed: boolean | string | undefined;
  tourBookingPage: RDF.NamedNode | undefined;
}

export function ApartmentComplexMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ApartmentComplexClass extends ResidenceMixin(Resource) implements ApartmentComplex {
    @property.resource()
    numberOfAccommodationUnits: Schema.QuantitativeValue | undefined;
    @property.resource()
    numberOfAvailableAccommodationUnits: Schema.QuantitativeValue | undefined;
    @property.resource()
    numberOfBedrooms: Schema.QuantitativeValue | undefined;
    @property.literal({ path: schema.numberOfBedrooms, type: Number })
    numberOfBedroomsLiteral: number | undefined;
    @property.literal()
    petsAllowed: boolean | string | undefined;
    @property()
    tourBookingPage: RDF.NamedNode | undefined;
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
