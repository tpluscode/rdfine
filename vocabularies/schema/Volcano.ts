import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<Volcano>) {
    super(arg)
    this.types.add(schema.Volcano)
    initializeProperties(this, init)
  }
}
VolcanoMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Volcano)
VolcanoMixin.Class = VolcanoImpl
