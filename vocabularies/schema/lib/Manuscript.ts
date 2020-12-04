import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface Manuscript<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
}

export function ManuscriptMixin<Base extends Constructor>(Resource: Base): Constructor<Manuscript> & Base {
  @namespace(schema)
  class ManuscriptClass extends CreativeWorkMixin(Resource) implements Manuscript {
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
