import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { SportsActivityLocationMixin } from './SportsActivityLocation';

export interface SkiResort<ID extends ResourceNode = ResourceNode> extends Schema.SportsActivityLocation<ID>, RdfResource<ID> {
}

export function SkiResortMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SkiResortClass extends SportsActivityLocationMixin(Resource) implements SkiResort {
  }
  return SkiResortClass
}

class SkiResortImpl extends SkiResortMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SkiResort>) {
    super(arg, init)
    this.types.add(schema.SkiResort)
  }

  static readonly __mixins: Mixin[] = [SkiResortMixin, SportsActivityLocationMixin];
}
SkiResortMixin.appliesTo = schema.SkiResort
SkiResortMixin.Class = SkiResortImpl
