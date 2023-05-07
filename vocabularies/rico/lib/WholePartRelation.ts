import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { RelationMixin } from './Relation.js';

export interface WholePartRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Relation<D>, RdfResource<D> {
  wholePartRelationHasSource: Rico.Thing<D> | undefined;
  wholePartRelationHasTarget: Rico.Thing<D> | undefined;
}

export function WholePartRelationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<WholePartRelation> & RdfResourceCore> & Base {
  @namespace(rico)
  class WholePartRelationClass extends RelationMixin(Resource) implements Partial<WholePartRelation> {
    @property.resource({ implicitTypes: [rico.Thing] })
    wholePartRelationHasSource: Rico.Thing | undefined;
    @property.resource({ implicitTypes: [rico.Thing] })
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
