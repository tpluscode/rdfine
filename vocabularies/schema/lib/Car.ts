import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { VehicleMixin } from './Vehicle';

export interface Car<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Vehicle<D>, RdfResource<D> {
  acrissCode: string | undefined;
  roofLoad: Schema.QuantitativeValue<D> | undefined;
}

export function CarMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Car> & RdfResourceCore> & Base {
  @namespace(schema)
  class CarClass extends VehicleMixin(Resource) implements Partial<Car> {
    @property.literal()
    acrissCode: string | undefined;
    @property.resource()
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
