import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { RelationMixin } from './Relation.js';

export interface TypeRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Relation<D>, rdfine.RdfResource<D> {
  typeRelationHasSource: Rico.Type<D> | undefined;
  typeRelationHasTarget: Rico.Thing<D> | undefined;
}

export function TypeRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<TypeRelation & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class TypeRelationClass extends RelationMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.Type] })
    typeRelationHasSource: Rico.Type | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Thing] })
    typeRelationHasTarget: Rico.Thing | undefined;
  }
  return TypeRelationClass as any
}

class TypeRelationImpl extends TypeRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TypeRelation>) {
    super(arg, init)
    this.types.add(rico.TypeRelation)
  }

  static readonly __mixins: Mixin[] = [TypeRelationMixin, RelationMixin];
}
TypeRelationMixin.appliesTo = rico.TypeRelation
TypeRelationMixin.Class = TypeRelationImpl

export const fromPointer = createFactory<TypeRelation>([RelationMixin, TypeRelationMixin], { types: [rico.TypeRelation] });
