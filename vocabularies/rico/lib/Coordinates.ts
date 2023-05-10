import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { ThingMixin } from './Thing.js';

export interface Coordinates<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Thing<D>, rdfine.RdfResource<D> {
  altimetricSystem: RDF.Literal | undefined;
  altitude: RDF.Literal | undefined;
  geodesicSystem: RDF.Literal | undefined;
  isOrWasCoordinatesOf: Rico.PhysicalLocation<D> | undefined;
  latitude: RDF.Literal | undefined;
  longitude: RDF.Literal | undefined;
}

export function CoordinatesMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Coordinates> & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class CoordinatesClass extends ThingMixin(Resource) implements Partial<Coordinates> {
    @rdfine.property()
    altimetricSystem: RDF.Literal | undefined;
    @rdfine.property()
    altitude: RDF.Literal | undefined;
    @rdfine.property()
    geodesicSystem: RDF.Literal | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.PhysicalLocation] })
    isOrWasCoordinatesOf: Rico.PhysicalLocation | undefined;
    @rdfine.property()
    latitude: RDF.Literal | undefined;
    @rdfine.property()
    longitude: RDF.Literal | undefined;
  }
  return CoordinatesClass
}

class CoordinatesImpl extends CoordinatesMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Coordinates>) {
    super(arg, init)
    this.types.add(rico.Coordinates)
  }

  static readonly __mixins: Mixin[] = [CoordinatesMixin, ThingMixin];
}
CoordinatesMixin.appliesTo = rico.Coordinates
CoordinatesMixin.Class = CoordinatesImpl

export const fromPointer = createFactory<Coordinates>([ThingMixin, CoordinatesMixin], { types: [rico.Coordinates] });
