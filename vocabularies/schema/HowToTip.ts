import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';
import ListItemMixin from './ListItem';

export interface HowToTip extends Schema.CreativeWork, Schema.ListItem, RdfResource {
}

export default function HowToTipMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HowToTipClass extends ListItemMixin(CreativeWorkMixin(Resource)) implements HowToTip {
  }
  return HowToTipClass
}

class HowToTipImpl extends HowToTipMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<HowToTip>) {
    super(arg)
    this.types.add(schema.HowToTip)
    initializeProperties<HowToTip>(this, init)
  }
}
HowToTipMixin.shouldApply = (r: RdfResource) => r.types.has(schema.HowToTip)
HowToTipMixin.Class = HowToTipImpl
