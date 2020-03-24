import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface Menu extends Schema.CreativeWork, RdfResource {
  hasMenuItem: Schema.MenuItem;
  hasMenuSection: Schema.MenuSection;
}

export default function MenuMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MenuClass extends CreativeWorkMixin(Resource) implements Menu {
    @property.resource()
    hasMenuItem!: Schema.MenuItem;
    @property.resource()
    hasMenuSection!: Schema.MenuSection;
  }
  return MenuClass
}

class MenuImpl extends MenuMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Menu>) {
    super(arg)
    this.types.add(schema.Menu)
    initializeProperties(this, init)
  }
}
MenuMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Menu)
MenuMixin.Class = MenuImpl
