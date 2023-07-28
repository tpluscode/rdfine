import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { foaf } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Foaf from '../index.js';
import { OnlineAccountMixin } from './OnlineAccount.js';

export interface OnlineGamingAccount<D extends RDF.DatasetCore = RDF.DatasetCore> extends Foaf.OnlineAccount<D>, rdfine.RdfResource<D> {
}

export function OnlineGamingAccountMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<OnlineGamingAccount & RdfResourceCore> & Base {
  @rdfine.namespace(foaf)
  class OnlineGamingAccountClass extends OnlineAccountMixin(Resource) {
  }
  return OnlineGamingAccountClass as any
}

class OnlineGamingAccountImpl extends OnlineGamingAccountMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OnlineGamingAccount>) {
    super(arg, init)
    this.types.add(foaf.OnlineGamingAccount)
  }

  static readonly __mixins: Mixin[] = [OnlineGamingAccountMixin, OnlineAccountMixin];
}
OnlineGamingAccountMixin.appliesTo = foaf.OnlineGamingAccount
OnlineGamingAccountMixin.Class = OnlineGamingAccountImpl

export const fromPointer = createFactory<OnlineGamingAccount>([OnlineAccountMixin, OnlineGamingAccountMixin], { types: [foaf.OnlineGamingAccount] });
