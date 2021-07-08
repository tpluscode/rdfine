import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { SportsActivityLocationMixin } from './SportsActivityLocation';
import { ResortMixin } from './Resort';

export interface SkiResort<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.SportsActivityLocation<D>, Schema.Resort<D>, RdfResource<D> {
}

export function SkiResortMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<SkiResort> & RdfResourceCore> & Base {
  @namespace(schema)
  class SkiResortClass extends ResortMixin(SportsActivityLocationMixin(Resource)) implements Partial<SkiResort> {
  }
  return SkiResortClass
}

class SkiResortImpl extends SkiResortMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SkiResort>) {
    super(arg, init)
    this.types.add(schema.SkiResort)
  }

  static readonly __mixins: Mixin[] = [SkiResortMixin, SportsActivityLocationMixin, ResortMixin];
}
SkiResortMixin.appliesTo = schema.SkiResort
SkiResortMixin.Class = SkiResortImpl

export const fromPointer = createFactory<SkiResort>([ResortMixin, SportsActivityLocationMixin, SkiResortMixin], { types: [schema.SkiResort] });
