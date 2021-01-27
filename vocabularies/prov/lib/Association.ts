import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { prov } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '..';
import { AgentInfluenceMixin } from './AgentInfluence';

export interface Association<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.AgentInfluence<D>, RdfResource<D> {
  hadPlan: Prov.Plan<D> | undefined;
  hadRole: Prov.Role<D> | undefined;
}

export function AssociationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Association> & RdfResourceCore> & Base {
  @namespace(prov)
  class AssociationClass extends AgentInfluenceMixin(Resource) implements Partial<Association> {
    @property.resource({ implicitTypes: [prov.Plan] })
    hadPlan: Prov.Plan | undefined;
    @property.resource({ implicitTypes: [prov.Role] })
    hadRole: Prov.Role | undefined;
  }
  return AssociationClass
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
