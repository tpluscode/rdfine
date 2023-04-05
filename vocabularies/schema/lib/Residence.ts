import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { PlaceMixin } from './Place.js';

export interface Residence<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Place<D>, RdfResource<D> {
  accommodationFloorPlan: Schema.FloorPlan<D> | undefined;
}

export function ResidenceMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Residence> & RdfResourceCore> & Base {
  @namespace(schema)
  class ResidenceClass extends PlaceMixin(Resource) implements Partial<Residence> {
    @property.resource()
    accommodationFloorPlan: Schema.FloorPlan | undefined;
  }
  return ResidenceClass
}

class ResidenceImpl extends ResidenceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Residence>) {
    super(arg, init)
    this.types.add(schema.Residence)
  }

  static readonly __mixins: Mixin[] = [ResidenceMixin, PlaceMixin];
}
ResidenceMixin.appliesTo = schema.Residence
ResidenceMixin.Class = ResidenceImpl

export const fromPointer = createFactory<Residence>([PlaceMixin, ResidenceMixin], { types: [schema.Residence] });
