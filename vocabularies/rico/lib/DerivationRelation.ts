import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '..';
import { InstantiationToInstantiationRelationMixin } from './InstantiationToInstantiationRelation';
import { TemporalRelationMixin } from './TemporalRelation';

export interface DerivationRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.InstantiationToInstantiationRelation<D>, Rico.TemporalRelation<D>, RdfResource<D> {
  derivationRelationHasSource: Rico.Instantiation<D> | undefined;
  derivationRelationHasTarget: Rico.Instantiation<D> | undefined;
}

export function DerivationRelationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<DerivationRelation> & RdfResourceCore> & Base {
  @namespace(rico)
  class DerivationRelationClass extends TemporalRelationMixin(InstantiationToInstantiationRelationMixin(Resource)) implements Partial<DerivationRelation> {
    @property.resource({ implicitTypes: [rico.Instantiation] })
    derivationRelationHasSource: Rico.Instantiation | undefined;
    @property.resource({ implicitTypes: [rico.Instantiation] })
    derivationRelationHasTarget: Rico.Instantiation | undefined;
  }
  return DerivationRelationClass
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
