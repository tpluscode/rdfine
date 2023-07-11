import * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';
import { RuleRelationMixin } from './RuleRelation.js';

export interface MandateRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.RuleRelation<D>, rdfine.RdfResource<D> {
  asConcernsActivity: Rico.Activity<D> | undefined;
  authorizingAgent: Rico.Agent<D> | undefined;
  mandateRelationHasSource: Rico.Mandate<D> | undefined;
  mandateRelationHasTarget: Rico.Agent<D> | undefined;
}

export function MandateRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<MandateRelation & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class MandateRelationClass extends RuleRelationMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.Activity] })
    asConcernsActivity: Rico.Activity | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Agent] })
    authorizingAgent: Rico.Agent | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Mandate] })
    mandateRelationHasSource: Rico.Mandate | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Agent] })
    mandateRelationHasTarget: Rico.Agent | undefined;
  }
  return MandateRelationClass as any
}
MandateRelationMixin.appliesTo = rico.MandateRelation

export const factory = (env: RdfineEnvironment) => createFactory<MandateRelation>([RuleRelationMixin, MandateRelationMixin], { types: [rico.MandateRelation] }, env);
