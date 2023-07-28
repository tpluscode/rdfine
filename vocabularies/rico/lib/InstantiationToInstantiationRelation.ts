import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { RelationMixin } from './Relation.js';

export interface InstantiationToInstantiationRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Relation<D>, rdfine.RdfResource<D> {
  instantiationToInstantiationRelationConnects: Rico.Instantiation<D> | undefined;
}

export function InstantiationToInstantiationRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<InstantiationToInstantiationRelation & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class InstantiationToInstantiationRelationClass extends RelationMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.Instantiation] })
    instantiationToInstantiationRelationConnects: Rico.Instantiation | undefined;
  }
  return InstantiationToInstantiationRelationClass as any
}

class InstantiationToInstantiationRelationImpl extends InstantiationToInstantiationRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<InstantiationToInstantiationRelation>) {
    super(arg, init)
    this.types.add(rico.InstantiationToInstantiationRelation)
  }

  static readonly __mixins: Mixin[] = [InstantiationToInstantiationRelationMixin, RelationMixin];
}
InstantiationToInstantiationRelationMixin.appliesTo = rico.InstantiationToInstantiationRelation
InstantiationToInstantiationRelationMixin.Class = InstantiationToInstantiationRelationImpl

export const fromPointer = createFactory<InstantiationToInstantiationRelation>([RelationMixin, InstantiationToInstantiationRelationMixin], { types: [rico.InstantiationToInstantiationRelation] });
