import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { ConceptMixin } from './Concept.js';

export interface UnitOfMeasurement<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Concept<D>, RdfResource<D> {
  isUnitOfMeasurementOf: Rico.Extent<D> | undefined;
}

export function UnitOfMeasurementMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<UnitOfMeasurement> & RdfResourceCore> & Base {
  @namespace(rico)
  class UnitOfMeasurementClass extends ConceptMixin(Resource) implements Partial<UnitOfMeasurement> {
    @property.resource({ implicitTypes: [rico.Extent] })
    isUnitOfMeasurementOf: Rico.Extent | undefined;
  }
  return UnitOfMeasurementClass
}

class UnitOfMeasurementImpl extends UnitOfMeasurementMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<UnitOfMeasurement>) {
    super(arg, init)
    this.types.add(rico.UnitOfMeasurement)
  }

  static readonly __mixins: Mixin[] = [UnitOfMeasurementMixin, ConceptMixin];
}
UnitOfMeasurementMixin.appliesTo = rico.UnitOfMeasurement
UnitOfMeasurementMixin.Class = UnitOfMeasurementImpl

export const fromPointer = createFactory<UnitOfMeasurement>([ConceptMixin, UnitOfMeasurementMixin], { types: [rico.UnitOfMeasurement] });
