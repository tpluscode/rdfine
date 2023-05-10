import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface Thesis<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, rdfine.RdfResource<D> {
  inSupportOf: string | undefined;
}

export function ThesisMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Thesis> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ThesisClass extends CreativeWorkMixin(Resource) implements Partial<Thesis> {
    @rdfine.property.literal()
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

export const fromPointer = createFactory<Thesis>([CreativeWorkMixin, ThesisMixin], { types: [schema.Thesis] });
