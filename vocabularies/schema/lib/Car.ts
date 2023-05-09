import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { VehicleMixin } from './Vehicle.js';

export interface Car<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Vehicle<D>, rdfine.RdfResource<D> {
  acrissCode: string | undefined;
  roofLoad: Schema.QuantitativeValue<D> | undefined;
}

export function CarMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Car> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class CarClass extends VehicleMixin(Resource) implements Partial<Car> {
    @rdfine.property.literal()
    acrissCode: string | undefined;
    @rdfine.property.resource()
    roofLoad: Schema.QuantitativeValue | undefined;
  }
  return CarClass
}

class CarImpl extends CarMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Car>) {
    super(arg, init)
    this.types.add(schema.Car)
  }

  static readonly __mixins: Mixin[] = [CarMixin, VehicleMixin];
}
CarMixin.appliesTo = schema.Car
CarMixin.Class = CarImpl

export const fromPointer = createFactory<Car>([VehicleMixin, CarMixin], { types: [schema.Car] });
