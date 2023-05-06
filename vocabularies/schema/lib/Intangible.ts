import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ThingMixin } from './Thing.js';

export interface Intangible<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Thing<D>, RdfResource<D> {
}

export function IntangibleMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Intangible> & RdfResourceCore> & Base {
  @namespace(schema)
  class IntangibleClass extends ThingMixin(Resource) implements Partial<Intangible> {
  }
  return IntangibleClass
}

class IntangibleImpl extends IntangibleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Intangible>) {
    super(arg, init)
    this.types.add(schema.Intangible)
  }

  static readonly __mixins: Mixin[] = [IntangibleMixin, ThingMixin];
}
IntangibleMixin.appliesTo = schema.Intangible
IntangibleMixin.Class = IntangibleImpl

export const fromPointer = createFactory<Intangible>([ThingMixin, IntangibleMixin], { types: [schema.Intangible] });
