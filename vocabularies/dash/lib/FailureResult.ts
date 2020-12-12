import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { dash } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '..';
import type * as Shacl from '@rdfine/shacl';
import { AbstractResultMixin as ShaclAbstractResultMixin } from '@rdfine/shacl/lib/AbstractResult';

export interface FailureResult<D extends RDF.DatasetCore = RDF.DatasetCore> extends Shacl.AbstractResult<D>, RdfResource<D> {
}

export function FailureResultMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<FailureResult> & RdfResourceCore> & Base {
  @namespace(dash)
  class FailureResultClass extends ShaclAbstractResultMixin(Resource) implements Partial<FailureResult> {
  }
  return FailureResultClass
}

class FailureResultImpl extends FailureResultMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<FailureResult>) {
    super(arg, init)
    this.types.add(dash.FailureResult)
  }

  static readonly __mixins: Mixin[] = [FailureResultMixin, ShaclAbstractResultMixin];
}
FailureResultMixin.appliesTo = dash.FailureResult
FailureResultMixin.Class = FailureResultImpl
