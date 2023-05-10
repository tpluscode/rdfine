import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';

export interface Location<D extends RDF.DatasetCore = RDF.DatasetCore> extends rdfine.RdfResource<D> {
}

export function LocationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Location> & RdfResourceCore> & Base {
  @rdfine.namespace(prov)
  class LocationClass extends Resource implements Partial<Location> {
  }
  return LocationClass
}

class LocationImpl extends LocationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Location>) {
    super(arg, init)
    this.types.add(prov.Location)
  }

  static readonly __mixins: Mixin[] = [LocationMixin];
}
LocationMixin.appliesTo = prov.Location
LocationMixin.Class = LocationImpl

export const fromPointer = createFactory<Location>([LocationMixin], { types: [prov.Location] });
