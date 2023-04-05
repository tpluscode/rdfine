import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '..';
import { ThingMixin } from './Thing';

export interface Coordinates<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Thing<D>, RdfResource<D> {
  altimetricSystem: RDF.Literal | undefined;
  altitude: RDF.Literal | undefined;
  geodesicSystem: RDF.Literal | undefined;
  isOrWasCoordinatesOf: Rico.PhysicalLocation<D> | undefined;
  latitude: RDF.Literal | undefined;
  longitude: RDF.Literal | undefined;
}

export function CoordinatesMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Coordinates> & RdfResourceCore> & Base {
  @namespace(rico)
  class CoordinatesClass extends ThingMixin(Resource) implements Partial<Coordinates> {
    @property()
    altimetricSystem: RDF.Literal | undefined;
    @property()
    altitude: RDF.Literal | undefined;
    @property()
    geodesicSystem: RDF.Literal | undefined;
    @property.resource({ implicitTypes: [rico.PhysicalLocation] })
    isOrWasCoordinatesOf: Rico.PhysicalLocation | undefined;
    @property()
    latitude: RDF.Literal | undefined;
    @property()
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
