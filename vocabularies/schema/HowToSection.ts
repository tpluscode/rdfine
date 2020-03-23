import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';
import ItemListMixin from './ItemList';
import ListItemMixin from './ListItem';

export interface HowToSection extends Schema.CreativeWork, Schema.ItemList, Schema.ListItem, RdfResource {
  steps: Schema.CreativeWork | Schema.ItemList;
  stepsLiteral: string;
}

export default function HowToSectionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HowToSectionClass extends ListItemMixin(ItemListMixin(CreativeWorkMixin(Resource))) implements HowToSection {
    @property.resource()
    steps!: Schema.CreativeWork | Schema.ItemList;
    @property.literal({ path: schema.steps })
    stepsLiteral!: string;
  }
  return HowToSectionClass
}

class HowToSectionImpl extends HowToSectionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.HowToSection)
  }
}
HowToSectionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.HowToSection)
HowToSectionMixin.Class = HowToSectionImpl
