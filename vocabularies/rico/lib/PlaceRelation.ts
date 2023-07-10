import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { RelationMixin } from './Relation.js';

export interface PlaceRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Relation<D>, rdfine.RdfResource<D> {
  placeRelationHasSource: Rico.Place<D> | undefined;
  placeRelationHasTarget: Rico.Thing<D> | undefined;
}

export function PlaceRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<PlaceRelation & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class PlaceRelationClass extends RelationMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.Place] })
    placeRelationHasSource: Rico.Place | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Thing] })
    placeRelationHasTarget: Rico.Thing | undefined;
  }
  return PlaceRelationClass as any
}

class PlaceRelationImpl extends PlaceRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PlaceRelation>) {
    super(arg, init)
    this.types.add(rico.PlaceRelation)
  }

  static readonly __mixins: Mixin[] = [PlaceRelationMixin, RelationMixin];
}
PlaceRelationMixin.appliesTo = rico.PlaceRelation
PlaceRelationMixin.Class = PlaceRelationImpl

export const fromPointer = createFactory<PlaceRelation>([RelationMixin, PlaceRelationMixin], { types: [rico.PlaceRelation] });
