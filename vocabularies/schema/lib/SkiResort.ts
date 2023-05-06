import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ResortMixin } from './Resort.js';
import { SportsActivityLocationMixin } from './SportsActivityLocation.js';

export interface SkiResort<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Resort<D>, Schema.SportsActivityLocation<D>, RdfResource<D> {
}

export function SkiResortMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<SkiResort> & RdfResourceCore> & Base {
  @namespace(schema)
  class SkiResortClass extends SportsActivityLocationMixin(ResortMixin(Resource)) implements Partial<SkiResort> {
  }
  return SkiResortClass
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
