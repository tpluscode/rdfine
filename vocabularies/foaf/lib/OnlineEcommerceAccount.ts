import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { foaf } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Foaf from '../index.js';
import { OnlineAccountMixin } from './OnlineAccount.js';

export interface OnlineEcommerceAccount<D extends RDF.DatasetCore = RDF.DatasetCore> extends Foaf.OnlineAccount<D>, rdfine.RdfResource<D> {
}

export function OnlineEcommerceAccountMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<OnlineEcommerceAccount & RdfResourceCore> & Base {
  @rdfine.namespace(foaf)
  class OnlineEcommerceAccountClass extends OnlineAccountMixin(Resource) {
  }
  return OnlineEcommerceAccountClass as any
}

class OnlineEcommerceAccountImpl extends OnlineEcommerceAccountMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OnlineEcommerceAccount>) {
    super(arg, init)
    this.types.add(foaf.OnlineEcommerceAccount)
  }

  static readonly __mixins: Mixin[] = [OnlineEcommerceAccountMixin, OnlineAccountMixin];
}
OnlineEcommerceAccountMixin.appliesTo = foaf.OnlineEcommerceAccount
OnlineEcommerceAccountMixin.Class = OnlineEcommerceAccountImpl

export const fromPointer = createFactory<OnlineEcommerceAccount>([OnlineAccountMixin, OnlineEcommerceAccountMixin], { types: [foaf.OnlineEcommerceAccount] });
