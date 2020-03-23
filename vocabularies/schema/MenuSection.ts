import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface MenuSection extends Schema.CreativeWork, RdfResource {
  hasMenuItem: Schema.MenuItem;
  hasMenuSection: MenuSection;
}

export default function MenuSectionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MenuSectionClass extends CreativeWorkMixin(Resource) implements MenuSection {
    @property.resource()
    hasMenuItem!: Schema.MenuItem;
    @property.resource()
    hasMenuSection!: MenuSection;
  }
  return MenuSectionClass
}

class MenuSectionImpl extends MenuSectionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.MenuSection)
  }
}
MenuSectionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MenuSection)
MenuSectionMixin.Class = MenuSectionImpl
