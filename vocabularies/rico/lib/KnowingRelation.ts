import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';
import { AgentToAgentRelationMixin } from './AgentToAgentRelation.js';

export interface KnowingRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.AgentToAgentRelation<D>, rdfine.RdfResource<D> {
  knowingRelationConnects: Rico.Person<D> | undefined;
}

declare global {
  interface RicoVocabulary {
    KnowingRelation: Factory<Rico.KnowingRelation>;
  }
}

export function KnowingRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<KnowingRelation & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class KnowingRelationClass extends AgentToAgentRelationMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.Person] })
    knowingRelationConnects: Rico.Person | undefined;
  }
  return KnowingRelationClass as any
}
KnowingRelationMixin.appliesTo = rico.KnowingRelation
KnowingRelationMixin.createFactory = (env: RdfineEnvironment) => createFactory<KnowingRelation>([AgentToAgentRelationMixin, KnowingRelationMixin], { types: [rico.KnowingRelation] }, env)
