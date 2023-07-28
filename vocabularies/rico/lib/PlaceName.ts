import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { NameMixin } from './Name.js';

export interface PlaceName<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Name<D>, rdfine.RdfResource<D> {
  isOrWasPlaceNameOf: Rico.Place<D> | undefined;
}

export function PlaceNameMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<PlaceName & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class PlaceNameClass extends NameMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.Place] })
    isOrWasPlaceNameOf: Rico.Place | undefined;
  }
  return PlaceNameClass as any
}

class PlaceNameImpl extends PlaceNameMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PlaceName>) {
    super(arg, init)
    this.types.add(rico.PlaceName)
  }

  static readonly __mixins: Mixin[] = [PlaceNameMixin, NameMixin];
}
PlaceNameMixin.appliesTo = rico.PlaceName
PlaceNameMixin.Class = PlaceNameImpl

export const fromPointer = createFactory<PlaceName>([NameMixin, PlaceNameMixin], { types: [rico.PlaceName] });
