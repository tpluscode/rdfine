import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CreativeWorkMixin } from './CreativeWork';

export interface MenuSection extends Schema.CreativeWork, RdfResource {
  hasMenuItem: Schema.MenuItem;
  hasMenuSection: Schema.MenuSection;
}

export function MenuSectionMixin<Base extends Constructor>(Resource: Base) {
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

  static readonly __mixins: Mixin[] = [MenuSectionMixin, CreativeWorkMixin];
}
MenuSectionMixin.appliesTo = schema.MenuSection
MenuSectionMixin.Class = MenuSectionImpl
