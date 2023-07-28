import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { AutomotiveBusinessMixin } from './AutomotiveBusiness.js';

export interface AutoDealer<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AutomotiveBusiness<D>, rdfine.RdfResource<D> {
}

export function AutoDealerMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<AutoDealer & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class AutoDealerClass extends AutomotiveBusinessMixin(Resource) {
  }
  return AutoDealerClass as any
}

class AutoDealerImpl extends AutoDealerMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AutoDealer>) {
    super(arg, init)
    this.types.add(schema.AutoDealer)
  }

  static readonly __mixins: Mixin[] = [AutoDealerMixin, AutomotiveBusinessMixin];
}
AutoDealerMixin.appliesTo = schema.AutoDealer
AutoDealerMixin.Class = AutoDealerImpl

export const fromPointer = createFactory<AutoDealer>([AutomotiveBusinessMixin, AutoDealerMixin], { types: [schema.AutoDealer] });
