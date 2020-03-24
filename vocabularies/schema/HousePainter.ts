import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import HomeAndConstructionBusinessMixin from './HomeAndConstructionBusiness';

export interface HousePainter extends Schema.HomeAndConstructionBusiness, RdfResource {
}

export default function HousePainterMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HousePainterClass extends HomeAndConstructionBusinessMixin(Resource) implements HousePainter {
  }
  return HousePainterClass
}

class HousePainterImpl extends HousePainterMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<HousePainter>) {
    super(arg)
    this.types.add(schema.HousePainter)
    initializeProperties(this, init)
  }
}
HousePainterMixin.shouldApply = (r: RdfResource) => r.types.has(schema.HousePainter)
HousePainterMixin.Class = HousePainterImpl
