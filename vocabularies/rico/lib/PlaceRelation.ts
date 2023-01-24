import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '..';
import { RelationMixin } from './Relation';

export interface PlaceRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Relation<D>, RdfResource<D> {
  placeRelationHasSource: Rico.Place<D> | undefined;
  placeRelationHasTarget: Rico.Thing<D> | undefined;
}

export function PlaceRelationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<PlaceRelation> & RdfResourceCore> & Base {
  @namespace(rico)
  class PlaceRelationClass extends RelationMixin(Resource) implements Partial<PlaceRelation> {
    @property.resource({ implicitTypes: [rico.Place] })
    placeRelationHasSource: Rico.Place | undefined;
    @property.resource({ implicitTypes: [rico.Thing] })
    placeRelationHasTarget: Rico.Thing | undefined;
  }
  return PlaceRelationClass
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
