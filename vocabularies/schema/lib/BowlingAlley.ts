import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { SportsActivityLocationMixin } from './SportsActivityLocation.js';

export interface BowlingAlley<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.SportsActivityLocation<D>, RdfResource<D> {
}

export function BowlingAlleyMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<BowlingAlley> & RdfResourceCore> & Base {
  @namespace(schema)
  class BowlingAlleyClass extends SportsActivityLocationMixin(Resource) implements Partial<BowlingAlley> {
  }
  return BowlingAlleyClass
}

class BowlingAlleyImpl extends BowlingAlleyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BowlingAlley>) {
    super(arg, init)
    this.types.add(schema.BowlingAlley)
  }

  static readonly __mixins: Mixin[] = [BowlingAlleyMixin, SportsActivityLocationMixin];
}
BowlingAlleyMixin.appliesTo = schema.BowlingAlley
BowlingAlleyMixin.Class = BowlingAlleyImpl

export const fromPointer = createFactory<BowlingAlley>([SportsActivityLocationMixin, BowlingAlleyMixin], { types: [schema.BowlingAlley] });
