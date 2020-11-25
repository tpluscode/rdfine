import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface Thesis<ID extends ResourceNode = ResourceNode> extends Schema.CreativeWork<ID>, RdfResource<ID> {
  inSupportOf: string | undefined;
}

export function ThesisMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ThesisClass extends CreativeWorkMixin(Resource) implements Thesis {
    @property.literal()
    inSupportOf: string | undefined;
  }
  return ThesisClass
}

class ThesisImpl extends ThesisMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Thesis>) {
    super(arg, init)
    this.types.add(schema.Thesis)
  }

  static readonly __mixins: Mixin[] = [ThesisMixin, CreativeWorkMixin];
}
ThesisMixin.appliesTo = schema.Thesis
ThesisMixin.Class = ThesisImpl
