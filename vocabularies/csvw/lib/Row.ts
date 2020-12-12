import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { csvw } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Csvw from '..';

export interface Row<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  describes: RDF.Term | undefined;
  primaryKey: string | undefined;
  referencedRow: RDF.Term | undefined;
  title: RDF.Term | undefined;
}

export function RowMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Row> & RdfResourceCore> & Base {
  @namespace(csvw)
  class RowClass extends Resource implements Partial<Row> {
    @property()
    describes: RDF.Term | undefined;
    @property.literal()
    primaryKey: string | undefined;
    @property()
    referencedRow: RDF.Term | undefined;
    @property()
    title: RDF.Term | undefined;
  }
  return RowClass
}

class RowImpl extends RowMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Row>) {
    super(arg, init)
    this.types.add(csvw.Row)
  }

  static readonly __mixins: Mixin[] = [RowMixin];
}
RowMixin.appliesTo = csvw.Row
RowMixin.Class = RowImpl
