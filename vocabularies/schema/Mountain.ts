import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import LandformMixin from './Landform';

export interface Mountain extends Schema.Landform, RdfResource {
}

export default function MountainMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MountainClass extends LandformMixin(Resource) implements Mountain {
  }
  return MountainClass
}

class MountainImpl extends MountainMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Mountain)
  }
}
MountainMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Mountain)
MountainMixin.Class = MountainImpl
