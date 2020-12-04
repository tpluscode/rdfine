import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { wgs } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Wgs from '..';

export interface SpatialThing<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  alt: number | undefined;
  lat: number | undefined;
  long: number | undefined;
}

export function SpatialThingMixin<Base extends Constructor>(Resource: Base): Constructor<SpatialThing> & Base {
  @namespace(wgs)
  class SpatialThingClass extends Resource implements SpatialThing {
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
