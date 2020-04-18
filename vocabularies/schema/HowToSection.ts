import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';
import ItemListMixin from './ItemList';
import ListItemMixin from './ListItem';

export interface HowToSection extends Schema.CreativeWork, Schema.ItemList, Schema.ListItem, RdfResource {
  steps: Array<Schema.CreativeWork | Schema.ItemList>;
  stepsLiteral: Array<string>;
}

export default function HowToSectionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HowToSectionClass extends ListItemMixin(ItemListMixin(CreativeWorkMixin(Resource))) implements HowToSection {
    @property.resource({ values: 'array' })
    steps!: Array<Schema.CreativeWork | Schema.ItemList>;
    @property.literal({ path: schema.steps, values: 'array' })
    stepsLiteral!: Array<string>;
  }
  return HowToSectionClass
}

class HowToSectionImpl extends HowToSectionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HowToSection>) {
    super(arg, init)
    this.types.add(schema.HowToSection)
  }
}
HowToSectionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.HowToSection)
HowToSectionMixin.Class = HowToSectionImpl
