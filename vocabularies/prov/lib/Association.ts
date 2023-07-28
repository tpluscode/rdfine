import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';
import { AgentInfluenceMixin } from './AgentInfluence.js';

export interface Association<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.AgentInfluence<D>, rdfine.RdfResource<D> {
  hadPlan: Prov.Plan<D> | undefined;
  hadRole: Prov.Role<D> | undefined;
}

export function AssociationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Association & RdfResourceCore> & Base {
  @rdfine.namespace(prov)
  class AssociationClass extends AgentInfluenceMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [prov.Plan] })
    hadPlan: Prov.Plan | undefined;
    @rdfine.property.resource({ implicitTypes: [prov.Role] })
    hadRole: Prov.Role | undefined;
  }
  return AssociationClass as any
}

class AssociationImpl extends AssociationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Association>) {
    super(arg, init)
    this.types.add(prov.Association)
  }

  static readonly __mixins: Mixin[] = [AssociationMixin, AgentInfluenceMixin];
}
AssociationMixin.appliesTo = prov.Association
AssociationMixin.Class = AssociationImpl

export const fromPointer = createFactory<Association>([AgentInfluenceMixin, AssociationMixin], { types: [prov.Association] });
