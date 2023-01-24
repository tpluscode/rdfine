import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '..';
import { NameMixin } from './Name';

export interface PlaceName<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Name<D>, RdfResource<D> {
  isOrWasPlaceNameOf: Rico.Place<D> | undefined;
}

export function PlaceNameMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<PlaceName> & RdfResourceCore> & Base {
  @namespace(rico)
  class PlaceNameClass extends NameMixin(Resource) implements Partial<PlaceName> {
    @property.resource({ implicitTypes: [rico.Place] })
    isOrWasPlaceNameOf: Rico.Place | undefined;
  }
  return PlaceNameClass
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
