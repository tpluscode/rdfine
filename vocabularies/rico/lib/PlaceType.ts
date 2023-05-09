import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { TypeMixin } from './Type.js';

export interface PlaceType<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Type<D>, RdfResource<D> {
  isOrWasPlaceTypeOf: Rico.Place<D> | undefined;
}

export function PlaceTypeMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<PlaceType> & RdfResourceCore> & Base {
  @namespace(rico)
  class PlaceTypeClass extends TypeMixin(Resource) implements Partial<PlaceType> {
    @property.resource({ implicitTypes: [rico.Place] })
    isOrWasPlaceTypeOf: Rico.Place | undefined;
  }
  return PlaceTypeClass
}

class PlaceTypeImpl extends PlaceTypeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PlaceType>) {
    super(arg, init)
    this.types.add(rico.PlaceType)
  }

  static readonly __mixins: Mixin[] = [PlaceTypeMixin, TypeMixin];
}
PlaceTypeMixin.appliesTo = rico.PlaceType
PlaceTypeMixin.Class = PlaceTypeImpl

export const fromPointer = createFactory<PlaceType>([TypeMixin, PlaceTypeMixin], { types: [rico.PlaceType] });
