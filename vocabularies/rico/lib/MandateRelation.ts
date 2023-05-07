import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { RuleRelationMixin } from './RuleRelation.js';

export interface MandateRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.RuleRelation<D>, RdfResource<D> {
  asConcernsActivity: Rico.Activity<D> | undefined;
  authorizingAgent: Rico.Agent<D> | undefined;
  mandateRelationHasSource: Rico.Mandate<D> | undefined;
  mandateRelationHasTarget: Rico.Agent<D> | undefined;
}

export function MandateRelationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MandateRelation> & RdfResourceCore> & Base {
  @namespace(rico)
  class MandateRelationClass extends RuleRelationMixin(Resource) implements Partial<MandateRelation> {
    @property.resource({ implicitTypes: [rico.Activity] })
    asConcernsActivity: Rico.Activity | undefined;
    @property.resource({ implicitTypes: [rico.Agent] })
    authorizingAgent: Rico.Agent | undefined;
    @property.resource({ implicitTypes: [rico.Mandate] })
    mandateRelationHasSource: Rico.Mandate | undefined;
    @property.resource({ implicitTypes: [rico.Agent] })
    mandateRelationHasTarget: Rico.Agent | undefined;
  }
  return MandateRelationClass
}

class MandateRelationImpl extends MandateRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MandateRelation>) {
    super(arg, init)
    this.types.add(rico.MandateRelation)
  }

  static readonly __mixins: Mixin[] = [MandateRelationMixin, RuleRelationMixin];
}
MandateRelationMixin.appliesTo = rico.MandateRelation
MandateRelationMixin.Class = MandateRelationImpl

export const fromPointer = createFactory<MandateRelation>([RuleRelationMixin, MandateRelationMixin], { types: [rico.MandateRelation] });
