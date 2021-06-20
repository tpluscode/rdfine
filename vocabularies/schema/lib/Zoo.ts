import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CivicStructureMixin } from './CivicStructure';

export interface Zoo<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, RdfResource<D> {
}

export function ZooMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Zoo> & RdfResourceCore> & Base {
  @namespace(schema)
  class ZooClass extends CivicStructureMixin(Resource) implements Partial<Zoo> {
  }
  return ZooClass
}

class ZooImpl extends ZooMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Zoo>) {
    super(arg, init)
    this.types.add(schema.Zoo)
  }

  static readonly __mixins: Mixin[] = [ZooMixin, CivicStructureMixin];
}
ZooMixin.appliesTo = schema.Zoo
ZooMixin.Class = ZooImpl

export const fromPointer = createFactory<Zoo>([CivicStructureMixin, ZooMixin], { types: [schema.Zoo] });
