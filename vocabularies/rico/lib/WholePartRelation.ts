import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { RelationMixin } from './Relation.js';

export interface WholePartRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Relation<D>, rdfine.RdfResource<D> {
  wholePartRelationHasSource: Rico.Thing<D> | undefined;
  wholePartRelationHasTarget: Rico.Thing<D> | undefined;
}

export function WholePartRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<WholePartRelation> & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class WholePartRelationClass extends RelationMixin(Resource) implements Partial<WholePartRelation> {
    @rdfine.property.resource({ implicitTypes: [rico.Thing] })
    wholePartRelationHasSource: Rico.Thing | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Thing] })
    wholePartRelationHasTarget: Rico.Thing | undefined;
  }
  return WholePartRelationClass
}

class WholePartRelationImpl extends WholePartRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<WholePartRelation>) {
    super(arg, init)
    this.types.add(rico.WholePartRelation)
  }

  static readonly __mixins: Mixin[] = [WholePartRelationMixin, RelationMixin];
}
WholePartRelationMixin.appliesTo = rico.WholePartRelation
WholePartRelationMixin.Class = WholePartRelationImpl

export const fromPointer = createFactory<WholePartRelation>([RelationMixin, WholePartRelationMixin], { types: [rico.WholePartRelation] });
