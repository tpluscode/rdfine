import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { hydra } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '../index.js';

export interface Status<D extends RDF.DatasetCore = RDF.DatasetCore> extends rdfine.RdfResource<D> {
  description: string | undefined;
  statusCode: number | undefined;
  title: string | undefined;
}

export function StatusMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Status & RdfResourceCore> & Base {
  @rdfine.namespace(hydra)
  class StatusClass extends Resource {
    @rdfine.property.literal()
    description: string | undefined;
    @rdfine.property.literal({ type: Number })
    statusCode: number | undefined;
    @rdfine.property.literal()
    title: string | undefined;
  }
  return StatusClass as any
}

class StatusImpl extends StatusMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Status>) {
    super(arg, init)
    this.types.add(hydra.Status)
  }

  static readonly __mixins: Mixin[] = [StatusMixin];
}
StatusMixin.appliesTo = hydra.Status
StatusMixin.Class = StatusImpl

export const fromPointer = createFactory<Status>([StatusMixin], { types: [hydra.Status] });
