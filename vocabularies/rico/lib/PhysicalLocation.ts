import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { ThingMixin } from './Thing.js';

export interface PhysicalLocation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Thing<D>, RdfResource<D> {
  hasOrHadCoordinates: Rico.Coordinates<D> | undefined;
  isOrWasPhysicalLocationOf: Rico.Place<D> | undefined;
}

export function PhysicalLocationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<PhysicalLocation> & RdfResourceCore> & Base {
  @namespace(rico)
  class PhysicalLocationClass extends ThingMixin(Resource) implements Partial<PhysicalLocation> {
    @property.resource({ implicitTypes: [rico.Coordinates] })
    hasOrHadCoordinates: Rico.Coordinates | undefined;
    @property.resource({ implicitTypes: [rico.Place] })
    isOrWasPhysicalLocationOf: Rico.Place | undefined;
  }
  return PhysicalLocationClass
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
