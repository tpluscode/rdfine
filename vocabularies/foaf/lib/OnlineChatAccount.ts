import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { foaf } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Foaf from '..';
import { OnlineAccountMixin } from './OnlineAccount';

export interface OnlineChatAccount<D extends RDF.DatasetCore = RDF.DatasetCore> extends Foaf.OnlineAccount<D>, RdfResource<D> {
}

export function OnlineChatAccountMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<OnlineChatAccount> & RdfResourceCore> & Base {
  @namespace(foaf)
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
