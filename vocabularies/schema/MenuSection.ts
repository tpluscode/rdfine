import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface MenuSection extends Schema.CreativeWork, RdfResource {
  hasMenuItem: Schema.MenuItem;
  hasMenuSection: Schema.MenuSection;
}

export default function MenuSectionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MenuSectionClass extends CreativeWorkMixin(Resource) implements MenuSection {
    @property.resource()
    hasMenuItem!: Schema.MenuItem;
    @property.resource()
    hasMenuSection!: Schema.MenuSection;
  }
  return MenuSectionClass
}

class MenuSectionImpl extends MenuSectionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MenuSection>) {
    super(arg, init)
    this.types.add(schema.MenuSection)
  }
}
MenuSectionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MenuSection)
MenuSectionMixin.Class = MenuSectionImpl
