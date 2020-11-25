import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface Photograph<ID extends ResourceNode = ResourceNode> extends Schema.CreativeWork<ID>, RdfResource<ID> {
}

export function PhotographMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PhotographClass extends CreativeWorkMixin(Resource) implements Photograph {
  }
  return PhotographClass
}

class PhotographImpl extends PhotographMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Photograph>) {
    super(arg, init)
    this.types.add(schema.Photograph)
  }

  static readonly __mixins: Mixin[] = [PhotographMixin, CreativeWorkMixin];
}
PhotographMixin.appliesTo = schema.Photograph
PhotographMixin.Class = PhotographImpl
