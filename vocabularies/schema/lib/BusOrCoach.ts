import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { VehicleMixin } from './Vehicle.js';

export interface BusOrCoach<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Vehicle<D>, RdfResource<D> {
  acrissCode: string | undefined;
  roofLoad: Schema.QuantitativeValue<D> | undefined;
}

export function BusOrCoachMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<BusOrCoach> & RdfResourceCore> & Base {
  @namespace(schema)
  class BusOrCoachClass extends VehicleMixin(Resource) implements Partial<BusOrCoach> {
    @property.literal()
    acrissCode: string | undefined;
    @property.resource()
    roofLoad: Schema.QuantitativeValue | undefined;
  }
  return BusOrCoachClass
}

class BusOrCoachImpl extends BusOrCoachMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BusOrCoach>) {
    super(arg, init)
    this.types.add(schema.BusOrCoach)
  }

  static readonly __mixins: Mixin[] = [BusOrCoachMixin, VehicleMixin];
}
BusOrCoachMixin.appliesTo = schema.BusOrCoach
BusOrCoachMixin.Class = BusOrCoachImpl

export const fromPointer = createFactory<BusOrCoach>([VehicleMixin, BusOrCoachMixin], { types: [schema.BusOrCoach] });
