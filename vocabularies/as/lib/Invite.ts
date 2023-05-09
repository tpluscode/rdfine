import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { OfferMixin } from './Offer.js';

export interface Invite<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Offer<D>, rdfine.RdfResource<D> {
}

export function InviteMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Invite> & RdfResourceCore> & Base {
  @rdfine.namespace(as)
  class InviteClass extends OfferMixin(Resource) implements Partial<Invite> {
  }
  return InviteClass
}

class InviteImpl extends InviteMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Invite>) {
    super(arg, init)
    this.types.add(as.Invite)
  }

  static readonly __mixins: Mixin[] = [InviteMixin, OfferMixin];
}
InviteMixin.appliesTo = as.Invite
InviteMixin.Class = InviteImpl

export const fromPointer = createFactory<Invite>([OfferMixin, InviteMixin], { types: [as.Invite] });
