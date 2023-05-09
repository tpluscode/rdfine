import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { ThingMixin } from './Thing.js';

export interface Place<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Thing<D>, RdfResource<D> {
  containsOrContained: Rico.Place<D> | undefined;
  geographicalCoordinates: RDF.Literal | undefined;
  hasOrHadPhysicalLocation: Rico.PhysicalLocation<D> | undefined;
  hasOrHadPlaceName: Rico.PlaceName<D> | undefined;
  hasOrHadPlaceType: Rico.PlaceType<D> | undefined;
  history: RDF.Literal | undefined;
  isOrWasAdjacentTo: Rico.Place<D> | undefined;
  isOrWasContainedBy: Rico.Place<D> | undefined;
  isOrWasJurisdictionOf: Rico.Agent<D> | undefined;
  isOrWasLocationOf: Rico.Thing<D> | undefined;
  isPlaceAssociatedWith: Rico.Thing<D> | undefined;
  location: RDF.Literal | undefined;
  overlapsOrOverlapped: Rico.Place<D> | undefined;
  placeIsSourceOfPlaceRelation: Rico.PlaceRelation<D> | undefined;
}

export function PlaceMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Place> & RdfResourceCore> & Base {
  @namespace(rico)
  class PlaceClass extends ThingMixin(Resource) implements Partial<Place> {
    @property.resource({ as: [PlaceMixin] })
    containsOrContained: Rico.Place | undefined;
    @property()
    geographicalCoordinates: RDF.Literal | undefined;
    @property.resource({ implicitTypes: [rico.PhysicalLocation] })
    hasOrHadPhysicalLocation: Rico.PhysicalLocation | undefined;
    @property.resource({ implicitTypes: [rico.PlaceName] })
    hasOrHadPlaceName: Rico.PlaceName | undefined;
    @property.resource({ implicitTypes: [rico.PlaceType] })
    hasOrHadPlaceType: Rico.PlaceType | undefined;
    @property()
    history: RDF.Literal | undefined;
    @property.resource({ as: [PlaceMixin] })
    isOrWasAdjacentTo: Rico.Place | undefined;
    @property.resource({ as: [PlaceMixin] })
    isOrWasContainedBy: Rico.Place | undefined;
    @property.resource({ implicitTypes: [rico.Agent] })
    isOrWasJurisdictionOf: Rico.Agent | undefined;
    @property.resource({ implicitTypes: [rico.Thing] })
    isOrWasLocationOf: Rico.Thing | undefined;
    @property.resource({ implicitTypes: [rico.Thing] })
    isPlaceAssociatedWith: Rico.Thing | undefined;
    @property()
    location: RDF.Literal | undefined;
    @property.resource({ as: [PlaceMixin] })
    overlapsOrOverlapped: Rico.Place | undefined;
    @property.resource({ implicitTypes: [rico.PlaceRelation] })
    placeIsSourceOfPlaceRelation: Rico.PlaceRelation | undefined;
  }
  return PlaceClass
}

class PlaceImpl extends PlaceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Place>) {
    super(arg, init)
    this.types.add(rico.Place)
  }

  static readonly __mixins: Mixin[] = [PlaceMixin, ThingMixin];
}
PlaceMixin.appliesTo = rico.Place
PlaceMixin.Class = PlaceImpl

export const fromPointer = createFactory<Place>([ThingMixin, PlaceMixin], { types: [rico.Place] });
