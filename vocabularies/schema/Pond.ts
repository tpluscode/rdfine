import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import BodyOfWaterMixin from './BodyOfWater';

export interface Pond extends Schema.BodyOfWater, RdfResource {
}

export default function PondMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PondClass extends BodyOfWaterMixin(Resource) implements Pond {
  }
  return PondClass
}

class PondImpl extends PondMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Pond)
  }
}
PondMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Pond)
PondMixin.Class = PondImpl
