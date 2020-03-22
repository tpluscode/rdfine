import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import LandformMixin from './Landform';

export interface Volcano extends Schema.Landform, RdfResource {
}

export default function VolcanoMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class VolcanoClass extends LandformMixin(Resource) implements Volcano {
  }
  return VolcanoClass
}

class VolcanoImpl extends VolcanoMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Volcano)
  }
}
VolcanoMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Volcano)
VolcanoMixin.Class = VolcanoImpl
