import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { InstantiationToInstantiationRelationMixin } from './InstantiationToInstantiationRelation.js';
import { TemporalRelationMixin } from './TemporalRelation.js';

export interface DerivationRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.InstantiationToInstantiationRelation<D>, Rico.TemporalRelation<D>, rdfine.RdfResource<D> {
  derivationRelationHasSource: Rico.Instantiation<D> | undefined;
  derivationRelationHasTarget: Rico.Instantiation<D> | undefined;
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

class DerivationRelationImpl extends DerivationRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DerivationRelation>) {
    super(arg, init)
    this.types.add(rico.DerivationRelation)
  }

  static readonly __mixins: Mixin[] = [DerivationRelationMixin, InstantiationToInstantiationRelationMixin, TemporalRelationMixin];
}
DerivationRelationMixin.appliesTo = rico.DerivationRelation
DerivationRelationMixin.Class = DerivationRelationImpl

export const fromPointer = createFactory<DerivationRelation>([TemporalRelationMixin, InstantiationToInstantiationRelationMixin, DerivationRelationMixin], { types: [rico.DerivationRelation] });
