import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';

export interface Location<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
}

export function LocationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Location> & RdfResourceCore> & Base {
  @namespace(prov)
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
