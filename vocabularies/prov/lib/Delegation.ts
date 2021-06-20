import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '..';
import { AgentInfluenceMixin } from './AgentInfluence';

export interface Delegation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.AgentInfluence<D>, RdfResource<D> {
  hadActivity: Prov.Activity<D> | undefined;
}

export function DelegationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Delegation> & RdfResourceCore> & Base {
  @namespace(prov)
  class DelegationClass extends AgentInfluenceMixin(Resource) implements Partial<Delegation> {
    @property.resource({ implicitTypes: [prov.Activity] })
    hadActivity: Prov.Activity | undefined;
  }
  return DelegationClass
}

class DelegationImpl extends DelegationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Delegation>) {
    super(arg, init)
    this.types.add(prov.Delegation)
  }

  static readonly __mixins: Mixin[] = [DelegationMixin, AgentInfluenceMixin];
}
DelegationMixin.appliesTo = prov.Delegation
DelegationMixin.Class = DelegationImpl

export const fromPointer = createFactory<Delegation>([AgentInfluenceMixin, DelegationMixin], { types: [prov.Delegation] });
