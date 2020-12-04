import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { InsertActionMixin } from './InsertAction';

export interface PrependAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.InsertAction<D>, RdfResource<D> {
}

export function PrependActionMixin<Base extends Constructor>(Resource: Base): Constructor<PrependAction> & Base {
  @namespace(schema)
  class PrependActionClass extends InsertActionMixin(Resource) implements PrependAction {
  }
  return PrependActionClass
}

class PrependActionImpl extends PrependActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PrependAction>) {
    super(arg, init)
    this.types.add(schema.PrependAction)
  }

  static readonly __mixins: Mixin[] = [PrependActionMixin, InsertActionMixin];
}
PrependActionMixin.appliesTo = schema.PrependAction
PrependActionMixin.Class = PrependActionImpl
