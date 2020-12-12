import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StoreMixin } from './Store';

export interface HobbyShop<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, RdfResource<D> {
}

export function HobbyShopMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<HobbyShop> & RdfResourceCore> & Base {
  @namespace(schema)
  class HobbyShopClass extends StoreMixin(Resource) implements Partial<HobbyShop> {
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

export const fromPointer = createFactory<HobbyShop>([StoreMixin, HobbyShopMixin], { types: [schema.HobbyShop] });
