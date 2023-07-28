import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';
import { InstantiationToInstantiationRelationMixin } from './InstantiationToInstantiationRelation.js';
import { TemporalRelationMixin } from './TemporalRelation.js';

export interface DerivationRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.InstantiationToInstantiationRelation<D>, Rico.TemporalRelation<D>, rdfine.RdfResource<D> {
  derivationRelationHasSource: Rico.Instantiation<D> | undefined;
  derivationRelationHasTarget: Rico.Instantiation<D> | undefined;
}

declare global {
  interface RicoVocabulary {
    DerivationRelation: Factory<Rico.DerivationRelation>;
  }
}

export function DerivationRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<DerivationRelation & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class DerivationRelationClass extends TemporalRelationMixin(InstantiationToInstantiationRelationMixin(Resource)) {
    @rdfine.property.resource({ implicitTypes: [rico.Instantiation] })
    derivationRelationHasSource: Rico.Instantiation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Instantiation] })
    derivationRelationHasTarget: Rico.Instantiation | undefined;
  }
  return DerivationRelationClass as any
}
DerivationRelationMixin.appliesTo = rico.DerivationRelation
DerivationRelationMixin.createFactory = (env: RdfineEnvironment) => createFactory<DerivationRelation>([TemporalRelationMixin, InstantiationToInstantiationRelationMixin, DerivationRelationMixin], { types: [rico.DerivationRelation] }, env)
