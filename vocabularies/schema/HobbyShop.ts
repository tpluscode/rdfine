import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { StoreMixin } from './Store';

export interface HobbyShop extends Schema.Store, RdfResource {
}

export function HobbyShopMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HobbyShopClass extends StoreMixin(Resource) implements HobbyShop {
  }
  return HobbyShopClass
}

class HobbyShopImpl extends HobbyShopMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HobbyShop>) {
    super(arg, init)
    this.types.add(schema.HobbyShop)
  }

  static readonly __mixins: Mixin[] = [HobbyShopMixin, StoreMixin];
}
HobbyShopMixin.appliesTo = schema.HobbyShop
HobbyShopMixin.Class = HobbyShopImpl
