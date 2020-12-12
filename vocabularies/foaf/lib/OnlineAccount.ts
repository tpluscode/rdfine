import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { foaf } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Foaf from '..';

export interface OnlineAccount<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  accountName: RDF.Literal | undefined;
  accountServiceHomepage: Foaf.Document<D> | undefined;
}

export function OnlineAccountMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<OnlineAccount> & RdfResourceCore> & Base {
  @namespace(foaf)
  class OnlineAccountClass extends Resource implements Partial<OnlineAccount> {
    @property()
    accountName: RDF.Literal | undefined;
    @property.resource({ implicitTypes: [foaf.Document] })
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
