import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ResortMixin } from './Resort.js';
import { SportsActivityLocationMixin } from './SportsActivityLocation.js';

export interface SkiResort<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Resort<D>, Schema.SportsActivityLocation<D>, rdfine.RdfResource<D> {
}

export function SkiResortMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<SkiResort & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class SkiResortClass extends SportsActivityLocationMixin(ResortMixin(Resource)) {
  }
  return SkiResortClass as any
}

class SkiResortImpl extends SkiResortMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SkiResort>) {
    super(arg, init)
    this.types.add(schema.SkiResort)
  }

  static readonly __mixins: Mixin[] = [SkiResortMixin, ResortMixin, SportsActivityLocationMixin];
}
SkiResortMixin.appliesTo = schema.SkiResort
SkiResortMixin.Class = SkiResortImpl

export const fromPointer = createFactory<SkiResort>([SportsActivityLocationMixin, ResortMixin, SkiResortMixin], { types: [schema.SkiResort] });
