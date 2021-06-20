import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StoreMixin } from './Store';

export interface PawnShop<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, RdfResource<D> {
}

export function PawnShopMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<PawnShop> & RdfResourceCore> & Base {
  @namespace(schema)
  class PawnShopClass extends StoreMixin(Resource) implements Partial<PawnShop> {
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

export const fromPointer = createFactory<PawnShop>([StoreMixin, PawnShopMixin], { types: [schema.PawnShop] });
