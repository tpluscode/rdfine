import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { as } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '..';
import { OfferMixin } from './Offer';

export interface Invite<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Offer<D>, RdfResource<D> {
}

export function InviteMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Invite> & RdfResourceCore> & Base {
  @namespace(as)
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
