import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CreativeWorkMixin } from './CreativeWork';
import { ListItemMixin } from './ListItem';

export interface HowToTip extends Schema.CreativeWork, Schema.ListItem, RdfResource {
}

export function HowToTipMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HowToTipClass extends ListItemMixin(CreativeWorkMixin(Resource)) implements HowToTip {
  }
  return HowToTipClass
}

class HowToTipImpl extends HowToTipMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HowToTip>) {
    super(arg, init)
    this.types.add(schema.HowToTip)
  }

  static readonly __mixins: Mixin[] = [HowToTipMixin, CreativeWorkMixin, ListItemMixin];
}
HowToTipMixin.appliesTo = schema.HowToTip
HowToTipMixin.Class = HowToTipImpl
