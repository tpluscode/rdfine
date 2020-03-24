import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import HowToItemMixin from './HowToItem';

export interface HowToTool extends Schema.HowToItem, RdfResource {
}

export default function HowToToolMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HowToToolClass extends HowToItemMixin(Resource) implements HowToTool {
  }
  return HowToToolClass
}

class HowToToolImpl extends HowToToolMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<HowToTool>) {
    super(arg)
    this.types.add(schema.HowToTool)
    initializeProperties(this, init)
  }
}
HowToToolMixin.shouldApply = (r: RdfResource) => r.types.has(schema.HowToTool)
HowToToolMixin.Class = HowToToolImpl
