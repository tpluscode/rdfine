import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { BodyOfWaterMixin } from './BodyOfWater.js';

export interface Pond<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.BodyOfWater<D>, RdfResource<D> {
}

export function PondMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Pond> & RdfResourceCore> & Base {
  @namespace(schema)
  class PondClass extends BodyOfWaterMixin(Resource) implements Partial<Pond> {
  }
  return PondClass
}

class PondImpl extends PondMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Pond>) {
    super(arg, init)
    this.types.add(schema.Pond)
  }

  static readonly __mixins: Mixin[] = [PondMixin, BodyOfWaterMixin];
}
PondMixin.appliesTo = schema.Pond
PondMixin.Class = PondImpl

export const fromPointer = createFactory<Pond>([BodyOfWaterMixin, PondMixin], { types: [schema.Pond] });
