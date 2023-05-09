import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { VehicleMixin } from './Vehicle.js';

export interface BusOrCoach<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Vehicle<D>, rdfine.RdfResource<D> {
  acrissCode: string | undefined;
  roofLoad: Schema.QuantitativeValue<D> | undefined;
}

export function BusOrCoachMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<BusOrCoach> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class BusOrCoachClass extends VehicleMixin(Resource) implements Partial<BusOrCoach> {
    @rdfine.property.literal()
    acrissCode: string | undefined;
    @rdfine.property.resource()
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
