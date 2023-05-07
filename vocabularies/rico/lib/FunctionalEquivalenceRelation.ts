import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { InstantiationToInstantiationRelationMixin } from './InstantiationToInstantiationRelation.js';

export interface FunctionalEquivalenceRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.InstantiationToInstantiationRelation<D>, RdfResource<D> {
  functionalEquivalenceRelationConnects: Rico.Instantiation<D> | undefined;
}

export function FunctionalEquivalenceRelationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<FunctionalEquivalenceRelation> & RdfResourceCore> & Base {
  @namespace(rico)
  class FunctionalEquivalenceRelationClass extends InstantiationToInstantiationRelationMixin(Resource) implements Partial<FunctionalEquivalenceRelation> {
    @property.resource({ implicitTypes: [rico.Instantiation] })
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
