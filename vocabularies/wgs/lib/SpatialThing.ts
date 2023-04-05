import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { wgs } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Wgs from '../index.js';

export interface SpatialThing<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  alt: number | undefined;
  lat: number | undefined;
  long: number | undefined;
}

export function SpatialThingMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<SpatialThing> & RdfResourceCore> & Base {
  @namespace(wgs)
  class SpatialThingClass extends Resource implements Partial<SpatialThing> {
    @property.literal({ type: Number })
    alt: number | undefined;
    @property.literal({ type: Number })
    lat: number | undefined;
    @property.literal({ type: Number })
    long: number | undefined;
  }
  return SpatialThingClass
}

class SpatialThingImpl extends SpatialThingMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SpatialThing>) {
    super(arg, init)
    this.types.add(wgs.SpatialThing)
  }

  static readonly __mixins: Mixin[] = [SpatialThingMixin];
}
SpatialThingMixin.appliesTo = wgs.SpatialThing
SpatialThingMixin.Class = SpatialThingImpl

export const fromPointer = createFactory<SpatialThing>([SpatialThingMixin], { types: [wgs.SpatialThing] });
