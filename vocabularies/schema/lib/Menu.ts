import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface Menu<ID extends ResourceNode = ResourceNode> extends Schema.CreativeWork<ID>, RdfResource<ID> {
  hasMenuItem: Schema.MenuItem<SiblingNode<ID>> | undefined;
  hasMenuSection: Schema.MenuSection<SiblingNode<ID>> | undefined;
}

export function MenuMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MenuClass extends CreativeWorkMixin(Resource) implements Menu {
    @property.resource()
    hasMenuItem: Schema.MenuItem | undefined;
    @property.resource()
    hasMenuSection: Schema.MenuSection | undefined;
  }
  return MenuClass
}

class MenuImpl extends MenuMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Menu>) {
    super(arg, init)
    this.types.add(schema.Menu)
  }

  static readonly __mixins: Mixin[] = [MenuMixin, CreativeWorkMixin];
}
MenuMixin.appliesTo = schema.Menu
MenuMixin.Class = MenuImpl
