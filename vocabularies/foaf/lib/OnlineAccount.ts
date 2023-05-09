import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { foaf } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Foaf from '../index.js';

export interface OnlineAccount<D extends RDF.DatasetCore = RDF.DatasetCore> extends rdfine.RdfResource<D> {
  accountName: RDF.Literal | undefined;
  accountServiceHomepage: Foaf.Document<D> | undefined;
}

export function OnlineAccountMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<OnlineAccount> & RdfResourceCore> & Base {
  @rdfine.namespace(foaf)
  class OnlineAccountClass extends Resource implements Partial<OnlineAccount> {
    @rdfine.property()
    accountName: RDF.Literal | undefined;
    @rdfine.property.resource({ implicitTypes: [foaf.Document] })
    accountServiceHomepage: Foaf.Document | undefined;
  }
  return OnlineAccountClass
}

class OnlineAccountImpl extends OnlineAccountMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OnlineAccount>) {
    super(arg, init)
    this.types.add(foaf.OnlineAccount)
  }

  static readonly __mixins: Mixin[] = [OnlineAccountMixin];
}
OnlineAccountMixin.appliesTo = foaf.OnlineAccount
OnlineAccountMixin.Class = OnlineAccountImpl

export const fromPointer = createFactory<OnlineAccount>([OnlineAccountMixin], { types: [foaf.OnlineAccount] });
