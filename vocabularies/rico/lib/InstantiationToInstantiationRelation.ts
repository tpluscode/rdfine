import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '..';
import { RelationMixin } from './Relation';

export interface InstantiationToInstantiationRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Relation<D>, RdfResource<D> {
  instantiationToInstantiationRelationConnects: Rico.Instantiation<D> | undefined;
}

export function InstantiationToInstantiationRelationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<InstantiationToInstantiationRelation> & RdfResourceCore> & Base {
  @namespace(rico)
  class InstantiationToInstantiationRelationClass extends RelationMixin(Resource) implements Partial<InstantiationToInstantiationRelation> {
    @property.resource({ implicitTypes: [rico.Instantiation] })
    instantiationToInstantiationRelationConnects: Rico.Instantiation | undefined;
  }
  return InstantiationToInstantiationRelationClass
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
