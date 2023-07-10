import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { ThingMixin } from './Thing.js';

export interface PhysicalLocation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Thing<D>, rdfine.RdfResource<D> {
  hasOrHadCoordinates: Rico.Coordinates<D> | undefined;
  isOrWasPhysicalLocationOf: Rico.Place<D> | undefined;
}

export function PhysicalLocationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<PhysicalLocation & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class PhysicalLocationClass extends ThingMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.Coordinates] })
    hasOrHadCoordinates: Rico.Coordinates | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Place] })
    isOrWasPhysicalLocationOf: Rico.Place | undefined;
  }
  return PhysicalLocationClass as any
}

class PhysicalLocationImpl extends PhysicalLocationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PhysicalLocation>) {
    super(arg, init)
    this.types.add(rico.PhysicalLocation)
  }

  static readonly __mixins: Mixin[] = [PhysicalLocationMixin, ThingMixin];
}
PhysicalLocationMixin.appliesTo = rico.PhysicalLocation
PhysicalLocationMixin.Class = PhysicalLocationImpl

export const fromPointer = createFactory<PhysicalLocation>([ThingMixin, PhysicalLocationMixin], { types: [rico.PhysicalLocation] });
