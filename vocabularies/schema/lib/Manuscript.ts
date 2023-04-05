import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface Manuscript<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
}

export function ManuscriptMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Manuscript> & RdfResourceCore> & Base {
  @namespace(schema)
  class ManuscriptClass extends CreativeWorkMixin(Resource) implements Partial<Manuscript> {
  }
  return ManuscriptClass
}

class ManuscriptImpl extends ManuscriptMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Manuscript>) {
    super(arg, init)
    this.types.add(schema.Manuscript)
  }

  static readonly __mixins: Mixin[] = [ManuscriptMixin, CreativeWorkMixin];
}
ManuscriptMixin.appliesTo = schema.Manuscript
ManuscriptMixin.Class = ManuscriptImpl

export const fromPointer = createFactory<Manuscript>([CreativeWorkMixin, ManuscriptMixin], { types: [schema.Manuscript] });
