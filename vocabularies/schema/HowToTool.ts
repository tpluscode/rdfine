import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { HowToItemMixin } from './HowToItem';

export interface HowToTool extends Schema.HowToItem, RdfResource {
}

export function HowToToolMixin<Base extends Constructor>(Resource: Base) {
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

  static readonly __mixins: Mixin[] = [HowToToolMixin, HowToItemMixin];
}
HowToToolMixin.appliesTo = schema.HowToTool
HowToToolMixin.Class = HowToToolImpl
