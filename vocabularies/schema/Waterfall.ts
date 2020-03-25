import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import BodyOfWaterMixin from './BodyOfWater';

export interface Waterfall extends Schema.BodyOfWater, RdfResource {
}

export default function WaterfallMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WaterfallClass extends BodyOfWaterMixin(Resource) implements Waterfall {
  }
  return WaterfallClass
}

class WaterfallImpl extends WaterfallMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Waterfall>) {
    super(arg)
    this.types.add(schema.Waterfall)
    initializeProperties<Waterfall>(this, init)
  }
}
WaterfallMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Waterfall)
WaterfallMixin.Class = WaterfallImpl
