import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { InstantiationToInstantiationRelationMixin } from './InstantiationToInstantiationRelation.js';

export interface FunctionalEquivalenceRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.InstantiationToInstantiationRelation<D>, rdfine.RdfResource<D> {
  functionalEquivalenceRelationConnects: Rico.Instantiation<D> | undefined;
}

export function FunctionalEquivalenceRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<FunctionalEquivalenceRelation> & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class FunctionalEquivalenceRelationClass extends InstantiationToInstantiationRelationMixin(Resource) implements Partial<FunctionalEquivalenceRelation> {
    @rdfine.property.resource({ implicitTypes: [rico.Instantiation] })
    functionalEquivalenceRelationConnects: Rico.Instantiation | undefined;
  }
  return FunctionalEquivalenceRelationClass
}

class FunctionalEquivalenceRelationImpl extends FunctionalEquivalenceRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<FunctionalEquivalenceRelation>) {
    super(arg, init)
    this.types.add(rico.FunctionalEquivalenceRelation)
  }

  static readonly __mixins: Mixin[] = [FunctionalEquivalenceRelationMixin, InstantiationToInstantiationRelationMixin];
}
FunctionalEquivalenceRelationMixin.appliesTo = rico.FunctionalEquivalenceRelation
FunctionalEquivalenceRelationMixin.Class = FunctionalEquivalenceRelationImpl

export const fromPointer = createFactory<FunctionalEquivalenceRelation>([InstantiationToInstantiationRelationMixin, FunctionalEquivalenceRelationMixin], { types: [rico.FunctionalEquivalenceRelation] });
