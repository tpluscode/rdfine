import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { RelationMixin } from './Relation.js';

export interface SequentialRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Relation<D>, RdfResource<D> {
  sequentialRelationHasSource: Rico.Thing<D> | undefined;
  sequentialRelationHasTarget: Rico.Thing<D> | undefined;
}

export function SequentialRelationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<SequentialRelation> & RdfResourceCore> & Base {
  @namespace(rico)
  class SequentialRelationClass extends RelationMixin(Resource) implements Partial<SequentialRelation> {
    @property.resource({ implicitTypes: [rico.Thing] })
    sequentialRelationHasSource: Rico.Thing | undefined;
    @property.resource({ implicitTypes: [rico.Thing] })
    sequentialRelationHasTarget: Rico.Thing | undefined;
  }
  return SequentialRelationClass
}

class SequentialRelationImpl extends SequentialRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SequentialRelation>) {
    super(arg, init)
    this.types.add(rico.SequentialRelation)
  }

  static readonly __mixins: Mixin[] = [SequentialRelationMixin, RelationMixin];
}
SequentialRelationMixin.appliesTo = rico.SequentialRelation
SequentialRelationMixin.Class = SequentialRelationImpl

export const fromPointer = createFactory<SequentialRelation>([RelationMixin, SequentialRelationMixin], { types: [rico.SequentialRelation] });
