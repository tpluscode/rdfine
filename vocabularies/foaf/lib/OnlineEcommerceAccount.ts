import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { foaf } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Foaf from '..';
import { OnlineAccountMixin } from './OnlineAccount';

export interface OnlineEcommerceAccount<D extends RDF.DatasetCore = RDF.DatasetCore> extends Foaf.OnlineAccount<D>, RdfResource<D> {
}

export function OnlineEcommerceAccountMixin<Base extends Constructor>(Resource: Base): Constructor<OnlineEcommerceAccount> & Base {
  @namespace(foaf)
  class OnlineEcommerceAccountClass extends OnlineAccountMixin(Resource) implements OnlineEcommerceAccount {
  }
  return OnlineEcommerceAccountClass
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
