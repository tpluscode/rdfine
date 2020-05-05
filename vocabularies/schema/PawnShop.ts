import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { StoreMixin } from './Store';

export interface PawnShop extends Schema.Store, RdfResource {
}

export function PawnShopMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PawnShopClass extends StoreMixin(Resource) implements PawnShop {
  }
  return PawnShopClass
}

class PawnShopImpl extends PawnShopMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PawnShop>) {
    super(arg, init)
    this.types.add(schema.PawnShop)
  }

  static readonly __mixins: Mixin[] = [PawnShopMixin, StoreMixin];
}
PawnShopMixin.appliesTo = schema.PawnShop
PawnShopMixin.Class = PawnShopImpl
