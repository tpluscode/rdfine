import * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';
import { ThingMixin } from './Thing.js';

export interface Place<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Thing<D>, rdfine.RdfResource<D> {
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

export function PlaceMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Place & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class PlaceClass extends ThingMixin(Resource) {
    @rdfine.property.resource({ as: [PlaceMixin] })
    containsOrContained: Rico.Place | undefined;
    @rdfine.property()
    geographicalCoordinates: RDF.Literal | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.PhysicalLocation] })
    hasOrHadPhysicalLocation: Rico.PhysicalLocation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.PlaceName] })
    hasOrHadPlaceName: Rico.PlaceName | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.PlaceType] })
    hasOrHadPlaceType: Rico.PlaceType | undefined;
    @rdfine.property()
    history: RDF.Literal | undefined;
    @rdfine.property.resource({ as: [PlaceMixin] })
    isOrWasAdjacentTo: Rico.Place | undefined;
    @rdfine.property.resource({ as: [PlaceMixin] })
    isOrWasContainedBy: Rico.Place | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Agent] })
    isOrWasJurisdictionOf: Rico.Agent | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Thing] })
    isOrWasLocationOf: Rico.Thing | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Thing] })
    isPlaceAssociatedWith: Rico.Thing | undefined;
    @rdfine.property()
    location: RDF.Literal | undefined;
    @rdfine.property.resource({ as: [PlaceMixin] })
    overlapsOrOverlapped: Rico.Place | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.PlaceRelation] })
    placeIsSourceOfPlaceRelation: Rico.PlaceRelation | undefined;
  }
  return PlaceClass as any
}
PlaceMixin.appliesTo = rico.Place
PlaceMixin.createFactory = (env: RdfineEnvironment) => createFactory<Place>([ThingMixin, PlaceMixin], { types: [rico.Place] }, env)
