import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ResidenceMixin } from './Residence.js';

export interface ApartmentComplex<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Residence<D>, RdfResource<D> {
  numberOfAccommodationUnits: Schema.QuantitativeValue<D> | undefined;
  numberOfAvailableAccommodationUnits: Schema.QuantitativeValue<D> | undefined;
  numberOfBedrooms: Schema.QuantitativeValue<D> | undefined;
  numberOfBedroomsLiteral: number | undefined;
  petsAllowed: boolean | string | undefined;
  tourBookingPage: RDF.NamedNode | undefined;
}

export function ApartmentComplexMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ApartmentComplex> & RdfResourceCore> & Base {
  @namespace(schema)
  class ApartmentComplexClass extends ResidenceMixin(Resource) implements Partial<ApartmentComplex> {
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

export const fromPointer = createFactory<ApartmentComplex>([ResidenceMixin, ApartmentComplexMixin], { types: [schema.ApartmentComplex] });
