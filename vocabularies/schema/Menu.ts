import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Menu)
  }
}
MenuMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Menu)
MenuMixin.Class = MenuImpl
