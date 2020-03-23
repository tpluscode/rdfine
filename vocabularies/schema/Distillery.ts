import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import FoodEstablishmentMixin from './FoodEstablishment';

export interface Distillery extends Schema.FoodEstablishment, RdfResource {
}

export default function DistilleryMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DistilleryClass extends FoodEstablishmentMixin(Resource) implements Distillery {
  }
  return DistilleryClass
}

class DistilleryImpl extends DistilleryMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Distillery)
  }
}
DistilleryMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Distillery)
DistilleryMixin.Class = DistilleryImpl
