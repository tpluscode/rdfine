import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { foaf } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Foaf from '../index.js';
import { OnlineAccountMixin } from './OnlineAccount.js';

export interface OnlineChatAccount<D extends RDF.DatasetCore = RDF.DatasetCore> extends Foaf.OnlineAccount<D>, rdfine.RdfResource<D> {
}

export function OnlineChatAccountMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<OnlineChatAccount> & RdfResourceCore> & Base {
  @rdfine.namespace(foaf)
  class OnlineChatAccountClass extends OnlineAccountMixin(Resource) implements Partial<OnlineChatAccount> {
  }
  return OnlineChatAccountClass
}

class OnlineChatAccountImpl extends OnlineChatAccountMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OnlineChatAccount>) {
    super(arg, init)
    this.types.add(foaf.OnlineChatAccount)
  }

  static readonly __mixins: Mixin[] = [OnlineChatAccountMixin, OnlineAccountMixin];
}
OnlineChatAccountMixin.appliesTo = foaf.OnlineChatAccount
OnlineChatAccountMixin.Class = OnlineChatAccountImpl

export const fromPointer = createFactory<OnlineChatAccount>([OnlineAccountMixin, OnlineChatAccountMixin], { types: [foaf.OnlineChatAccount] });
