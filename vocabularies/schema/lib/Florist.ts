import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StoreMixin } from './Store.js';

export interface Florist<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, rdfine.RdfResource<D> {
}

export function FloristMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Florist> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class FloristClass extends StoreMixin(Resource) implements Partial<Florist> {
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

export const fromPointer = createFactory<Florist>([StoreMixin, FloristMixin], { types: [schema.Florist] });
