import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { csvw } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Csvw from '../index.js';

export interface ForeignKey<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  columnReference: string | undefined;
  reference: Csvw.TableReference<D> | undefined;
}

export function ForeignKeyMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ForeignKey> & RdfResourceCore> & Base {
  @namespace(csvw)
  class ForeignKeyClass extends Resource implements Partial<ForeignKey> {
    @property.literal()
    columnReference: string | undefined;
    @property.resource({ implicitTypes: [csvw.TableReference] })
    reference: Csvw.TableReference | undefined;
  }
  return ForeignKeyClass
}

class ForeignKeyImpl extends ForeignKeyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ForeignKey>) {
    super(arg, init)
    this.types.add(csvw.ForeignKey)
  }

  static readonly __mixins: Mixin[] = [ForeignKeyMixin];
}
ForeignKeyMixin.appliesTo = csvw.ForeignKey
ForeignKeyMixin.Class = ForeignKeyImpl

export const fromPointer = createFactory<ForeignKey>([ForeignKeyMixin], { types: [csvw.ForeignKey] });
