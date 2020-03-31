import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<HowToTool>) {
    super(arg, init)
    this.types.add(schema.HowToTool)
  }
}
HowToToolMixin.shouldApply = (r: RdfResource) => r.types.has(schema.HowToTool)
HowToToolMixin.Class = HowToToolImpl
