import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StoreMixin } from './Store';

export interface Florist<ID extends ResourceNode = ResourceNode> extends Schema.Store<ID>, RdfResource<ID> {
}

export function FloristMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FloristClass extends StoreMixin(Resource) implements Florist {
  }
  return FloristClass
}

class FloristImpl extends FloristMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Florist>) {
    super(arg, init)
    this.types.add(schema.Florist)
  }

  static readonly __mixins: Mixin[] = [FloristMixin, StoreMixin];
}
FloristMixin.appliesTo = schema.Florist
FloristMixin.Class = FloristImpl
