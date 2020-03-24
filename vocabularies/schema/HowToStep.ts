import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';
import ItemListMixin from './ItemList';
import ListItemMixin from './ListItem';

export interface HowToStep extends Schema.CreativeWork, Schema.ItemList, Schema.ListItem, RdfResource {
}

export default function HowToStepMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HowToStepClass extends ListItemMixin(ItemListMixin(CreativeWorkMixin(Resource))) implements HowToStep {
  }
  return HowToStepClass
}

class HowToStepImpl extends HowToStepMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<HowToStep>) {
    super(arg)
    this.types.add(schema.HowToStep)
    initializeProperties(this, init)
  }
}
HowToStepMixin.shouldApply = (r: RdfResource) => r.types.has(schema.HowToStep)
HowToStepMixin.Class = HowToStepImpl
