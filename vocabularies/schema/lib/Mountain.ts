import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { LandformMixin } from './Landform.js';

export interface Mountain<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Landform<D>, RdfResource<D> {
}

export function MountainMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Mountain> & RdfResourceCore> & Base {
  @namespace(schema)
  class MountainClass extends LandformMixin(Resource) implements Partial<Mountain> {
  }
  return MountainClass
}

class MountainImpl extends MountainMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Mountain>) {
    super(arg, init)
    this.types.add(schema.Mountain)
  }

  static readonly __mixins: Mixin[] = [MountainMixin, LandformMixin];
}
MountainMixin.appliesTo = schema.Mountain
MountainMixin.Class = MountainImpl

export const fromPointer = createFactory<Mountain>([LandformMixin, MountainMixin], { types: [schema.Mountain] });
