import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StoreMixin } from './Store';

export interface Florist<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, RdfResource<D> {
}

export function FloristMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Florist> & RdfResourceCore> & Base {
  @namespace(schema)
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
