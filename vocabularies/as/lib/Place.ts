import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { ObjectMixin } from './Object.js';

export interface Place<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Object<D>, RdfResource<D> {
  accuracy: number | undefined;
  altitude: number | undefined;
  latitude: number | undefined;
  longitude: number | undefined;
  radius: number | undefined;
  units: 'cm' | 'feet' | 'inches' | 'km' | 'm' | 'miles' | string | undefined;
}

export function PlaceMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Place> & RdfResourceCore> & Base {
  @namespace(as)
  class PlaceClass extends ObjectMixin(Resource) implements Partial<Place> {
    @property.literal({ type: Number })
    accuracy: number | undefined;
    @property.literal({ type: Number })
    altitude: number | undefined;
    @property.literal({ type: Number })
    latitude: number | undefined;
    @property.literal({ type: Number })
    longitude: number | undefined;
    @property.literal({ type: Number })
    radius: number | undefined;
    @property.literal()
    units: 'cm' | 'feet' | 'inches' | 'km' | 'm' | 'miles' | string | undefined;
  }
  return PlaceClass
}

class PlaceImpl extends PlaceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Place>) {
    super(arg, init)
    this.types.add(as.Place)
  }

  static readonly __mixins: Mixin[] = [PlaceMixin, ObjectMixin];
}
PlaceMixin.appliesTo = as.Place
PlaceMixin.Class = PlaceImpl

export const fromPointer = createFactory<Place>([ObjectMixin, PlaceMixin], { types: [as.Place] });
